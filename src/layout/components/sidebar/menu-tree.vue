<template>
  <div class="menuTree">
    <template v-for="(item, index) in data">
      <el-submenu v-if="resolveRoute(item)" :index="item.index" :key="index">
        <template slot="title">
          <i :class="['menu-icon', 'iconfont', `icon-${item.meta.icon}`]"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <menu-tree :data="item.children" />
      </el-submenu>
      <router-link v-else :to="item.index" :key="index">
        <el-menu-item :index="currentItem.index">
          <i
            :class="['menu-icon', 'iconfont', `icon-${currentItem.meta.icon}`]"
          ></i>
          <span slot="title">{{ currentItem.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "menuTree",
  components: {},
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
    }),
  },
  data() {
    this.currentItem = null;
    return {};
  },
  created() {},
  methods: {
    resolveRoute(item) {
      /* 如果只有一条children默认只显示一级 */
      if (!item.meta.title && item.children && item.children.length == 1) {
        this.currentItem = item.children[0];
        return false;
      }
      this.currentItem = item;
      return !!item.children;
    },
  },
};
</script>
<style lang="scss" scoped>
.menuTree {
  height: 100%;
  .router-link-active,
  a {
    text-decoration: none;
  }
  .menu-icon {  
    color: black;
    margin-right: 10px;
    font-size: 14px;
  }
  .el-menu-item.is-active{
    .menu-icon{
      color: #409EFF;
    }
  }
}
</style>