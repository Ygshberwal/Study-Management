import Home from './components/Home.js'
import Login from './components/Login.js'
import Users from './components/Users.js'
import StudyResourceForm from './components/StudyResourceForm.js'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/users', component: Users},
  { path: '/create-resource', component: StudyResourceForm},

]

export default new VueRouter({
  routes,
})