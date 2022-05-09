import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/partner",
    name: "partner",
    component: () => import("./components/PartnerList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/partner/:id",
    name: "partner-details",
    component: () => import("./components/Partner")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/addpartner",
    name: "add-partner",
    component: () => import("./components/AddPartner")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
