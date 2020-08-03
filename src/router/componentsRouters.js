export default [{
    path: "button",
    component: () => import("@/views/docs/button/index.vue"),
},{
    path: "scroll-bar",
    component: () => import("@/views/docs/scroll-bar/index.vue"),
},{
    path: "table",
    component: () => import("@/views/docs/table/index.vue"),
},{
    path: "toast",
    component: () => import("@/views/docs/toast/index.vue"),
}]