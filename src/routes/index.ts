import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import MyLinks from "../components/MyLinks.vue";

const routes: Readonly<RouteRecordRaw[]> = [
  { path: "/", component: HelloWorld },
  { path: "/my-links", component: MyLinks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
