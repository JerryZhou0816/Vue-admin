import dashboard from "../pages/dashboard.vue";
import NotFoundView from "../components/404.vue";
import menuList from "../pages/sys/menu.vue";
import role from "../pages/sys/role.vue";
import resource from "../pages/sys/resource.vue";
import login from "../pages/login.vue";
import app from "../App.vue";
import sysUser from "../pages/sys/user.vue";
import userAdd from "../pages/sys/userAdd.vue";
import resetPwd from "../pages/resetPwd.vue";
// 产品管理路由
import goods from "../pages/product/goods.vue";
import classification from "../pages/product/classification.vue";
import gruop from "../pages/product/gruop.vue";
import specification from "../pages/product/specification.vue";
import comment from "../pages/product/comment.vue";
// 门店管理路由
import announcement from "../pages/shop/announcement.vue";
import carousel from "../pages/shop/carousel.vue";
import hotsearch from "../pages/shop/hotSearch.vue";
import selfmention from "../pages/shop/selfMention.vue";
import shipping from "../pages/shop/shipping.vue";
// 会员
import order from "../pages/order/order.vue";
// 成员
import members from "@/pages/member/members.vue";
// Routes
const routes = [
  { path: "/login", component: login },
  {
    path: "/test",
    component: app,
    children: [{ path: "*", component: NotFoundView }]
  },
  {
    path: "",
    component: app,
    children: [
      { path: "/resetPwd", component: resetPwd },
      { path: "/index", component: dashboard },
      { path: "/sys/menuList", component: menuList },
      { path: "/sys/roleList", component: role },
      { path: "/sys/userList", component: sysUser },
      { path: "/sys/userAdd", component: userAdd },
      { path: "/sys/resource", component: resource },
      { path: "/product/goods", component: goods },
      { path: "/product/classification", component: classification },
      { path: "/product/gruop", component: gruop },
      { path: "/product/specification", component: specification },
      { path: "/product/comment", component: comment },
      { path: "/shop/announcement", component: announcement },
      { path: "/shop/carousel", component: carousel },
      { path: "/shop/hotsearch", component: hotsearch },
      { path: "/shop/selfmention", component: selfmention },
      { path: "/shop/shipping", component: shipping },
      { path: "/member/members", component: members },
      { path: "/order", component: order }
    ]
  },
  { path: "*", component: NotFoundView }
];

export default routes;
