<template>
  <div class="navbar">
    <toggle
      :is-active="sidebar.opened"
      class="toggle"
      @toggleClick="toggleSideBar"
    />
    <el-dropdown @command="select" style="height: 45px">
      <div class="user-info">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >个人中心</el-dropdown-item>
        <el-dropdown-item >布局设置</el-dropdown-item>
        <el-dropdown-item command="login-out" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import toggle from "../toggle";
import { mapGetters } from "vuex";
export default {
  name: "navbar",
  components: { toggle },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  props: {},
  data() {
    return {
      active: true,
    };
  },
  created() {},
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    select(value) {
      if (value == "login-out") {
        this.$router.push("/login");
        localStorage.removeItem("token");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 1000;
  padding-right: 16px;
}
.toggle {
  line-height: 46px;
  height: 100%;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
.user-info {
  width: 45px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .el-avatar {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  .el-icon-caret-bottom {
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 26px;
  }
}
</style>