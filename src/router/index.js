import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/tweets",
    name: "Tweets",
    component: function() {
      return import("../views/Tweets.vue");
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: function() {
      return import("../views/Signup.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    component: function() {
      return import("../views/Login.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
