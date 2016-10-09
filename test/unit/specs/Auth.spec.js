import Vue from 'vue'
import Auth from 'src/components/Auth'

describe('Auth component', () => {
  it('should render correct contents', () => {
    // given
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Auth)
    });
    // then
    expect(vm.$el.querySelector('.container-fluid form label[for="identifier"]').textContent).to.equal('#Username');
    expect(vm.$el.querySelector('.container-fluid form label[for="password"]').textContent).to.equal('#Password');
    expect(vm.$el.querySelector('.container-fluid form button[type="submit"]').textContent).to.equal('Submit');
  })
});
