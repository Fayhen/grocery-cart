import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import StorePage from "@/views/StorePage.vue";
import Cart from "@/views/Cart.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/:category",
    name: "Store",
    component: StorePage,
    props: true
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
