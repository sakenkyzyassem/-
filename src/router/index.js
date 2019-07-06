import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home'
import AddPost from '../view/posts/add'
import Article from '../view/posts/article'
import Profile from '../view/profile/profile'
import Login from '../view/profile/login'
import Logout from '../view/profile/logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },
    {
      path: '/posts/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/posts/add',
      name: 'addPost',
      component: AddPost
    },
  ]
})
