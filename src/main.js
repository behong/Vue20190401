import Vue from 'vue'
import './js/pollyfills'
import VueRouter from 'vue-router'
import VueRouterPrefetch from 'vue-router-prefetch'
import VueNotify from 'vue-notifyjs'
import VeeValidate from 'vee-validate'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import App from './App.vue'


//Apollo
//import apolloClient from './apolloClient'
//import VueApollo from 'vue-apollo'

//agGrid
import agGrid from './js/agGrid'

// Plugins
import GlobalComponents from './js/globalComponents'
import GlobalDirectives from './js/globalDirectives'
import SideBar from './components/UIComponents/SidebarPlugin'
import initProgress from './js/progressbar';

// router setup
import routes from './routes/routes'

// library imports
import './assets/sass/paper-dashboard.scss'
import './assets/sass/demo.scss'

import sidebarLinks from './js/sidebarLinks'
import './js/registerServiceWorker'

// add axios 190401
import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.$hostname = 'https://jsonplaceholder.typicode.com'

// plugin setup
Vue.use(VueRouter)
Vue.use(VueRouterPrefetch)
Vue.use(GlobalDirectives)
Vue.use(GlobalComponents)
Vue.use(VueNotify)
Vue.use(SideBar, {sidebarLinks: sidebarLinks})
Vue.use(VeeValidate)

locale.use(lang)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  agGrid,
  axios
})


initProgress(router);
