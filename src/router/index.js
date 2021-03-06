import Vue from "vue";
import Router from "vue-router";

// Components
import Login from "@/components/Login";
import HomePage from "@/components/HomePage";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/login", name: "Login", component: Login }
  ]
});
