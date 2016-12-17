import Vue from 'vue'
import Auth from 'src/components/Auth'
import VueResource from 'vue-resource'

Vue.use(VueResource)

describe('Auth component', () => {
  let server

  beforeEach(() => {
    server = sinon.fakeServer.create()
  })

  it('should render correct auth contents', () => {
    // given
    let Ctor = Vue.extend(Auth)
    let vm = new Ctor().$mount()
    // then

    expect(vm.$el.querySelector('.container-fluid form label[for="identifier"]').textContent).to.equal('#UserIdentifier')
    expect(vm.$el.querySelector('.container-fluid form label[for="password"]').textContent).to.equal('#Password')
    expect(vm.$el.querySelector('.container-fluid form button[type="button"]').textContent).to.contains('#Login')
  })

  it('should emit loginSuccess event when login is successful', done => {
    // given
    // vue instanciation
    let Ctor = Vue.extend(Auth)
    let vm = new Ctor().$mount()
    let credential = vm.credential
    credential.login = 'myIdentifier'
    credential.password = 'myPassword'
    // registering the success event
    vm.$on('loginSuccess', (res) => {
      expect(res.token).to.equal('123456')
      done()
    })
    // fake server configuration
    server.respondWith(
      'POST', '/login',
      function (request) {
        let body = JSON.parse(request.requestBody)
        expect(body.login).to.equal('myIdentifier')
        expect(body.password).to.equal('myPassword')
        request.respond(200, {'Content-Type': 'application/json'}, '{"token":"123456"}')
      }
    )
    // when
    vm.login()
    server.respond()
  })

  it('should emit loginFailure event when login is rejected with error msg', done => {
    // given
    // vue instanciation
    let Ctor = Vue.extend(Auth)
    let vm = new Ctor().$mount()
    let credential = vm.credential
    credential.login = 'myIdentifier'
    credential.password = 'myFalsePassword'
    // registering the success event
    vm.$on('loginFailure', () => {
      expect(vm.loginError).to.equal('error cheater !')
      done()
    })
    // fake server configuration
    server.respondWith(
      'POST', '/login',
      function (request) {
        let body = JSON.parse(request.requestBody)
        expect(body.login).to.equal('myIdentifier')
        expect(body.password).to.equal('myFalsePassword')
        request.respond(401, {'Content-Type': 'application/json'}, '{"msg" : "error cheater !"}')
      }
    )
    // when
    vm.login()
    server.respond()
  })

  it('should emit loginFailure event when login is rejected without error msg', done => {
    // given
    // vue instanciation
    let Ctor = Vue.extend(Auth)
    let vm = new Ctor().$mount()
    let credential = vm.credential
    credential.login = 'myIdentifier'
    credential.password = 'myFalsePassword'
    // registering the success event
    vm.$on('loginFailure', () => {
      expect(vm.loginError).to.equal('#UnknowError')
      done()
    })
    // fake server configuration
    server.respondWith(
      'POST', '/login',
      function (request) {
        let body = JSON.parse(request.requestBody)
        expect(body.login).to.equal('myIdentifier')
        expect(body.password).to.equal('myFalsePassword')
        request.respond(401)
      }
    )
    // when
    vm.login()
    server.respond()
  })
})
