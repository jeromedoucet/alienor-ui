import Vue from 'vue'
import Auth from 'src/components/Auth'

describe('Auth component', () => {
  it('should render correct auth contents', () => {
    // given
    let Ctor = Vue.extend(Auth)
    let vm = new Ctor().$mount()
    // then

    console.log(vm.$el)
    // expect(vm.$el.querySelector('.container-fluid form label[for="identifier"]').textContent).to.equal('#UserIdentifier')
    // expect(vm.$el.querySelector('.container-fluid form label[for="password"]').textContent).to.equal('#Password')
    // expect(vm.$el.querySelector('.container-fluid form button[type="button"]').textContent).to.equal('#Login')
  })
})
