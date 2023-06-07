const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/request",
        component: () => import("src/pages/RequestPage.vue"),
      },
      {
        path: "/register",
        component: () => import("src/pages/RegisterPage.vue"),
      },
      { path: "/", component: () => import("src/pages/LoginPage.vue") },
      { path: "/tech/login", component: () => import("src/pages/TechLoginPage.vue") },
      {
        path: "/user/status",
        component: () => import("src/pages/UserStatus.vue"),
      },
      { path: "/tech", component: () => import("src/pages/TechDash.vue") },
      { path: "/tech/mng", component: () => import("src/pages/TechMng.vue") },
      { path: "/admin/login", component: () => import("src/pages/AdminLoginPage.vue") },
      { path: "/admin", component: () => import("src/pages/AdminDash.vue") },
      { path: "/admin/mng", component: () => import("src/pages/AdminMng.vue") },
      {
        path: "/admin/request",
        component: () => import("src/pages/AdminRequest.vue"),
      },
      {
        path: "/admin/addTech",
        component: () => import("src/pages/AddTech.vue"),
      },
      {
        path: "/user/request",
        component: () => import("src/pages/UserRequest.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
