<template>
  <FullCalendar ref="fullCalendar" :options="calendarOptions"> </FullCalendar>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { calendar } from "@/utils/calendar.js"; //农历计算方法
import { formatDate } from "@/utils/utils.js";
export default {
  name: "",
  components: { FullCalendar },
  data() {
    return {
      calendarApi: null,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin], // 需要用哪个插件引入后放到这个数组里
        initialView: "dayGridMonth", // 日历加载时的初始视图，默认值为'dayGridMonth'，可以为任何可用视图的值，如例如'dayGridWeek'，'timeGridDay'，'listWeek'
        locale: "zh-cn", // 设置日历的语言，中文为 “zh-cn”
        firstDay: "1", // 设置每周的第一天，默认值取决于当前语言环境，该值为代表星期几的数字，且值必须为整数，星期日=0
        weekNumberCalculation: "ISO", // 指定"ISO"结果为ISO8601周数。指定"ISO"将firstDay的默认值更改为1（Monday）
        // unselectAuto: false, //当点击页⾯⽇历以外的位置时，是否⾃动取消当前的选中状态。false是不取消
        selectable: true,
        buttonText: {
          // 文本将显示在headerToolbar / footerToolbar的按钮上。不支持HTML注入。所有特殊字符将被转义。
          today: "返回今天",
          day: "日",
          week: "周",
          month: "月",
        },
        headerToolbar: {
          // 在日历顶部定义按钮和标题。将headerToolbar选项设置为false不会显示任何标题工具栏。可以为对象提供属性start/center/end或left/center/right。这些属性包含带有逗号/空格分隔值的字符串。用逗号分隔的值将相邻显示。用空格分隔的值之间会显示一个很小的间隙。
          left: "prev today next",
          center: "title",
          right: "dayGridDay,dayGridWeek,dayGridMonth",
        },
        eventTimeFormat: {
          // 在每个事件上显示的时间的格式
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        },
        // customButtons: {
        //   // 定义可在headerToolbar / footerToolbar中使用的自定义按钮
        //   today: {
        //     text: "返回今天", // 按钮的展示文本
        //     click: this.todayClick, // 点击按钮触发的事件，这里要注意的是当按钮绑定了事件之后该按钮原本自带的事件将会失效
        //   },
        // },
        // eventClick: this.handleDateClick, // 点击事件时，触发该回调
        // eventMouseEnter: this.handleMouseEnter, // 鼠标悬停在事件上时，触发该回调
        // eventMouseLeave: this.handleMouseLeave, // 鼠标移除时，触发该回调
        dateClick: this.handleDateClick, // 当用户单击日期或时间时,触发该回调，触发此回调，您必须加载interaction插件
        views: {
          dayGridMonth: {
            displayEventTime: false, //是否显示时间
            dayCellContent(item) {
              let _date = formatDate(item.date, "yyyy-MM-dd").split("-");
              let _dateF = calendar.solar2lunar(_date[0], _date[1], _date[2]);
              const { cDay, IDayCn, lunarFestival, nWeek } = _dateF;
              const hightF = [
                "除夕",
                "春节",
                "元宵节",
                "端午节",
                "中秋节",
                "国庆节",
              ];
              let isFestival = lunarFestival && hightF.includes(lunarFestival);
              return {
                html: `
                  <div class="dayCell ${isFestival ? "festivalCell" : "oldC"}">
                    <div class="newC ${
                      [6, 7].includes(nWeek) ? "weekend" : ""
                    }">${cDay}</div>
                    <div class="${isFestival ? "festival" : "oldC"}">${
                  lunarFestival || IDayCn
                }</div>
                  </div>`,
              };
            },
          },
        },
      },
    };
  },
  mounted() {
    this.calendarApi = this.$refs.fullCalendar.getApi();
  },
  methods: {
    todayClick() {
      this.calendarApi.today(); // 将日历移动到当前日期。
      this.calendarApi.getDate(); // 返回日期的日历的当前日期
    },
    handleDateClick(obj) {
      console.log('obj',obj)
      // const { dateStr } = val;
      // this.calendarApi.gotoDate(dateStr);
    },
    nextClick() {
      this.calendarApi.next(); // 将日历向前移动一步（例如，一个月或一周）。
      // 如果dayGridMonth查看日历，则将日历向前移动一个月。
      // 如果日历位于dayGridWeek或中timeGridWeek，则将日历向前移动一周。
      // 如果日历位于dayGridDay或中timeGridDay，则将日历向前移动一天。
    },
    prevClick() {
      this.calendarApi.prev(); // 将日历后退一步（例如，一个月或一周）。
      // 如果dayGridMonth查看日历，则将日历后移一个月。
      // 如果日历位于dayGridWeek或中timeGridWeek，则将日历后移一周。
      // 如果日历位于dayGridDay或中timeGridDay，则将日历移回一天。
    },
  },
};
</script>

<style lang="scss" scoped>
//月
::v-deep .fc-dayGridMonth-view {
  .fc-daygrid-day-events {
    display: none; //注意-需要的话设置block
  }
  .fc-daygrid-day-top {
    display: block;
    .dayCell {
      //  height: 75.59px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .newC {
        text-align: center;
        font-size: 1.3em;
      }
      .weekend {
        color: #f73131;
      }
    }
    // .festivalCell {
    //   background: #fde3e4;
    // }
  }
}
</style>
