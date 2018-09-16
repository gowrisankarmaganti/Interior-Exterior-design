

import Vue from 'vue'
import home from "../components/content/home/home.vue"
import about from "../components/content/about/about.vue"
import contact from "../components/content/contact/contact.vue"
import team from "../components/content/team/team.vue"

import leftSideMenu from "../components/content/leftSideMenu/leftSideMenu.vue"
import registrationForms from "../components/content/registrationForms/registrationForms.vue"

import navbar from "../components/navbar"



Vue.component(navbar.name, navbar);
Vue.component(home.name, home);
Vue.component(about.name, about);
Vue.component(contact.name, contact);
Vue.component(team.name, team);
Vue.component(leftSideMenu.name, leftSideMenu);
Vue.component(registrationForms.name, registrationForms);

export default {
    
}