import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/Product"),
    meta: {
      title: "产品中心",
    },
  },
  {
    path: "/product/:id",
    name: "ProductContent",
    component: () => import("@/views/Product/Content"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
    meta: {
      title: "关于我们",
    },
  },
  {
    path: "/serve",
    name: "Serve",
    component: () => import("@/views/Serve"),
    meta: {
      title: "售后服务",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  if (to.meta.title) {
    if (to.meta.title === "首页") {
      document.title = store.state.site.site.title || to.meta.title;
    } else {
      document.title = to.meta.title;
    }
  }
  document.documentElement.scrollTop = 0;
});

export default router;
