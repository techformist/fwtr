import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.use(VueToast, {
  position: "top-right",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
