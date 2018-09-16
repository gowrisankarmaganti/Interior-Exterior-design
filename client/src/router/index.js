// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/content/home/home.vue"
import about from "../components/content/about/about.vue"
import contact from "../components/content/contact/contact.vue"
import team from "../components/content/team/team.vue"
Vue.use(Router)


Vue.config.productionTip = false

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/contact', component: contact },
  { path: '/team', component: team }
];


export default new Router({
  routes
})

