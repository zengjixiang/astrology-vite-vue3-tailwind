import Home from "./views/Home.vue";
import AstroInfo from "./views/AstroInfo.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
/** Routes (路由配置)
 */
export const routes = [
  { path: "/", component: Home, meta: { title: "系統首頁" } },




  { path: "/astroInfo", component: AstroInfo, meta: { title: "占星資訊" } },
  {
    path: "/about",
    meta: { title: "關於作者" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: "/:path(.*)", component: NotFound },
];
