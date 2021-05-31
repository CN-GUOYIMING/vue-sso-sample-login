import Vue from "vue";
import Router from "vue-router";

// Components
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login", // 名字不依頼其他東西
      component: Login
    },
    {
      path: "/helloworld",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});