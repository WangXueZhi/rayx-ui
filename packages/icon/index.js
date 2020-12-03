import Icon from "./icon.vue";
// import './iconfont'

// 加载在线资源
Icon.online = true;
Icon.onlineSrc = "//at.alicdn.com/t/font_2244128_n5pc8adhsq.js";
Icon.scriptId = "rayx-iconfont-script";
Icon.loadScript = function() {
  if (!Icon.online) {
    return;
  }
  const iconfontNode = document.getElementById(Icon.scriptId);
  if (!iconfontNode) {
    var element = document.createElement("script");
    element.src = Icon.onlineSrc;
    element.id = Icon.scriptId;
    document.body.appendChild(element);
  }
};

// 为组件提供 install 安装方法，供按需引入
Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
  Icon.loadScript();
};

window.R_ICON_FONT_COMPONENT = Icon;

// 默认导出组件
export default Icon;
