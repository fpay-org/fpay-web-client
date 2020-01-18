import Vue from "vue";
import Router from "vue-router";

import home from "./views/Home";

import console from "./views/console/Console";
import analytics from "./views/console/analytics/Analytics";
import heatmap from "./views/console/analytics/Heatmap";
import news from "./views/console/news-feed/News";
import reports from "./views/console/reports/Reports";
import officers from "./views/console/user/Officers";
import drivers from "./views/console/user/Drivers";
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
          path: "heatmap",
          component: heatmap
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
          component: officers
        },
        {
          path: "drivers",
          component: drivers
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
