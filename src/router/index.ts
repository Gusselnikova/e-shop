import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
import OrderCreatedView from "../views/OrderCreatedView.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:slug",
    name: "product",
    component: ProductView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/order-created/:id",
    name: "order-created",
    component: OrderCreatedView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
