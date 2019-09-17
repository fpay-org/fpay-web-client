import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(Argon);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
