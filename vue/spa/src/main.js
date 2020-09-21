// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/HelloWorld'
import About from './components/About'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
