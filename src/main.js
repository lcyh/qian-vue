import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance = null;
function render() {
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}
// 是子应用则 动态设置 publicPath
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 不是子应用就独立渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {
  console.log("bootstrap", props);
}
export async function mount(props) {
  render(props);
  console.log("挂载", props);
}
export async function unmount(props) {
  console.log("卸载", props);
  instance.$destroy();
}
