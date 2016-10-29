import Auth from './components/Auth'
import UserCreation from './components/UserCreation'

const routes = [
  {path: '/', name: 'root'},
  {path: '/authentication', name: 'authentication', component: Auth},
  {path: '/sign-in', name: 'sign-in', component: UserCreation}
]

export default routes
