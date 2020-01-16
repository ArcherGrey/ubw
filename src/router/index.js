import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "登录",
    component: Login
  },
  {
    path: "/index",
    name: "首页",
    component: Index
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

//路由守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.userInfo) {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  } else {
    if (to.path === "/login") {
      next("/index");
    } else {
      next();
    }
  }
});

export default router;
