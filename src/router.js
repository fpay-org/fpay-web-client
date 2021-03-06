import Vue from "vue";
import Router from "vue-router";

import home from "./views/Home";

import console from "./views/console/Console";
import analytics from "./views/console/analytics/Analytics";
import heatmap from "./views/console/analytics/Heatmap";
import news from "./views/console/news-feed/News";
import reports from "./views/console/reports/Reports";
import officers from "./views/console/user/officers/Officers";
import drivers from "./views/console/user/drivers/Drivers";
import settings from "./views/console/settings/Settings";
import myProfile from "./views/console/profile/MyProfile";
import editMyProfile from "./views/console/profile/EditMyProfile";
import profile from "./views/console/profile/Profile";
import penalties from "./views/console/fines/Penalties";
import editProfile from "./views/console/profile/EditProfile";
import addOfficer from "./views/console/user/officers/AddOfficer";

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
          path: "officers/add",
          component: addOfficer
        },
        {
          path: "penalties",
          component: penalties
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
          path: "me",
          component: myProfile
        },
        {
          path: "me/edit",
          component: editMyProfile
        },
        {
          path: "profile/:officer_id",
          component: profile
        },
        {
          path: "profile/:officer_id/edit",
          component: editProfile
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
