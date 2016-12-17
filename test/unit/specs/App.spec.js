import Vue from 'vue'
import App from 'src/App'
import VueRouter from 'vue-router'
import routes from 'src/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

describe('App component', () => {
  it('should render correct app contents', () => {
    // given
    let Ctor = Vue.extend(App)
    let vm = new Ctor({router}).$mount()
    // then

    expect(vm.$el.querySelector('.app .navbar-brand').textContent).to.equal('Alienor')
    console.log(vm.$el.querySelector('.app .navbar-nav .navbar-text'))
    expect(vm.$el.querySelector('.app .navbar-nav #navbar-link-sign-in').textContent).to.equal('#Signin')
    expect(vm.$el.querySelector('.app .navbar-nav #navbar-link-authentication').textContent).to.equal('#Authentication')
  })
})
