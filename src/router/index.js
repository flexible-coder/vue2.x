import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
Vue.use(VueRouter);
const constantRoutes = [
  {
    path: "",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/index"),
        meta: { title: "首页", icon: "shouye" },
      },
      {
        path: "vxe",
        name: "vxe",
        component: () => import("@/views/vxe"),
        meta: { title: "vxe-table", icon: "shouye" },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
    hidden: true,
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/error/401"),
    hidden: true,
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];
export default new VueRouter({
  mode: "history", // 去掉url中的#
  routes: constantRoutes,
});
