<template>
  <div class="index-container">
    <el-card class="fullCalendar-box" shadow="always">
      <FullCalendar />
    </el-card>
  </div>
</template>

<script>
import FullCalendar from "@/components/fullCalendar/fullCalendar";
export default {
  name: "index",
  components: { FullCalendar },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.index-container {
  padding: 20px;
  box-sizing: border-box;
  .fullCalendar-box {
    width: 700px;
  }
}
</style>
