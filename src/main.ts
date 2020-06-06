import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import message from "./store/message";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  created() {
    setTimeout(() => {
      message.refreshMessage("Start");
    }, 3000);
  },
}).$mount("#app");
