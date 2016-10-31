import Vue from 'vue'
import UserCreation from 'src/components/UserCreation'

describe('User creation component', () => {
  it('should render correct user creation contents', () => {
    let Ctor = Vue.extend(UserCreation)
    let vm = new Ctor().$mount()

    // then
    expect(vm.$el.querySelector('.container-fluid form label[for="identifier"]').textContent).to.equal('#UserIdentifier')
    expect(vm.$el.querySelector('.container-fluid form label[for="password"]').textContent).to.equal('#Password')
    expect(vm.$el.querySelector('.container-fluid form label[for="forname"]').textContent).to.equal('#Forname')
    expect(vm.$el.querySelector('.container-fluid form label[for="lastname"]').textContent).to.equal('#Lastname')
    expect(vm.$el.querySelector('.container-fluid form label[for="email"]').textContent).to.equal('#Email')
    expect(vm.$el.querySelector('.container-fluid form button[type="button"]').textContent).to.equal('Sign in')
  })
})
