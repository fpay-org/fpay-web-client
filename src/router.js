import Vue from "vue";
import Router from "vue-router";

import home from "./views/Home";

import console from "./views/console/Console";
import analytics from "./views/console/analytics/Analytics";
import news from "./views/console/news-feed/News";
import reports from "./views/console/reports/Reports";
import officer from "./views/console/user/Officer";
import settings from "./views/console/settings/Settings";
import profile from "./views/console/profile";

Vue.use(Router);

export default new Router({
  
  routes: [
    {
      path: "/",
      component: home
    },
    {
    path: "/console",
      component: console,
      children: [
        {
          path: "analytics",
          component: analytics
        },
        {
          path: "news-feed",
          component: news
        },
        {
          path: "reports",
          component: reports
        },
        {
          path: "officers",
          component: officer
        },
        {
          path: "settings",
          component: settings
        },
        {
          path: "",
          redirect: "analytics"
        },
        {
          path: "*",
          redirect: "analytics"
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
    // {
    //   path: "/about",
    //   name: "about"
    //   // component: () =>
    //   //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ],
 
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
