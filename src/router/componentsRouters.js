export default [{
    path: "components/button",
    component: () => import("@/views/docs/components/button/index.vue"),
},{
    path: "components/gr-modal",
    component: () => import("@/views/docs/components/gr-modal/index.vue"),
},{
    path: "components/scroll-bar",
    component: () => import("@/views/docs/components/scroll-bar/index.vue"),
},{
    path: "components/table",
    component: () => import("@/views/docs/components/table/index.vue"),
},{
    path: "components/test",
    component: () => import("@/views/docs/components/test/index.vue"),
},{
    path: "components/toast",
    component: () => import("@/views/docs/components/toast/index.vue"),
}]