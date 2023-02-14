<template>
  <div :class="['sidebar', isCollapse && 'sidebar-fold']">
    <logo :collapse="isCollapse" />
    <el-scrollbar>
      <el-menu
        mode="vertical"
        text-color="rgba(0, 0, 0, 0.7)"
        :unique-opened="true"
        :collapse-transition="false"
        :class="isCollapse && 'hideMenu'"
        :collapse="isCollapse"
        :default-active="activeMenuItem"
      >
        <menu-tree :data="routes" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Logo from "./logo";
import menuTree from "./menu-tree.vue";
import path from "path";
export default {
  name: "sidebar",
  components: { Logo, menuTree },
  props: {},
  computed: {
    ...mapState({
      opened: (state) => state.app.sidebar.opened,
    }),
    isCollapse() {
      return !this.opened;
    },
    routes() {
      const _routers = this.$router.options.routes.filter((item) => {
        if (!item.meta) {
          item.meta = {};
        }
        return item.children && item.children.length > 0;
      });
      const data = this.processRoute(_routers);
      return data;
    },
  },
  data() {
    return {
      activeMenuItem: '/index'
    };
  },
  created() {},
  methods: {
    /* 路由拼接 */
    processRoute(routes, basePath = "") {
      return routes.map((item) => {
        item.index = item.path;
        item.index = path.resolve(basePath, item.index);
        if (item.children && item.children.length > 0) {
          this.processRoute(item.children, item.index);
        }
        return item;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  transition: width 0.28s;
  width: 200px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: white;
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
.sidebar-fold {
  width: 54px !important;
}
.el-scrollbar {
  height: 100%;
  ::v-deep {
    .el-menu--collapse {
      width: auto;
    }
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
}
</style>
