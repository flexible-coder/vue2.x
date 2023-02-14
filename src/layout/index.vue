<template>
  <div :class="['layout', !sidebar.opened && 'hideSidebar']">
    <Sidebar />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import AppMain from "./components/AppMain.vue";
import { mapState } from "vuex";
export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
    }),
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
}
.main-container {
  min-height: 100%;
  background-color: #ebf1f6;
  transition: margin-left 0.28s;
  margin-left: 200px;
  position: relative;
}
.hideSidebar {
  .main-container {
    margin-left: 54px;
  }
}
</style>
