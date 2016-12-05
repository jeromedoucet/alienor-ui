import Vue from 'vue'
import UserCreation from 'src/components/UserCreation'
import VueResource from 'vue-resource'

Vue.use(VueResource)

describe('User creation component', () => {
  let server

  beforeEach(() => {
    server = sinon.fakeServer.create()
  })

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

  it('should emit userCreationSuccess event when login is successful', done => {
    // given
    // create vue instance
    let Ctor = Vue.extend(UserCreation)
    let vm = new Ctor().$mount()
    let user = vm.user
    user.identifier = 'lukeSkywalker'
    user.password = 'theForceMayWithYou'
    user.forName = 'luke'
    user.name = 'skywalker'
    user.email = 'luke.skywalker@rogue-squadron.org'
    // registering the success event
    vm.$on('userCreationSuccess', () => {
      done()
    })

    // fake server configuration
    server.respondWith(
      'POST', '/user',
      function (request) {
        let body = JSON.parse(request.requestBody)
        expect(body.identifier).to.equal('lukeSkywalker')
        expect(body.password).to.equal('theForceMayWithYou')
        expect(body.forName).to.equal('luke')
        expect(body.name).to.equal('skywalker')
        expect(body.email).to.equal('luke.skywalker@rogue-squadron.org')
        request.respond(201, {'Content-Type': 'application/json'}, `{"identifier":"lukeSkywalker",
                                                                     "forName":"luke",
                                                                     "name":"skywalker",
                                                                     "email":"luke.skywalker@rogue-squadron.org",
                                                                     "roles":[]}`)
      }
    )
    // when
    vm.save()
    server.respond()
  })

  it('should emit userCreationFailure event when login failed with error message', done => {
    // given
    // create vue instance
    let Ctor = Vue.extend(UserCreation)
    let vm = new Ctor().$mount()
    let user = vm.user
    user.identifier = 'lukeSkywalker'
    user.password = 'theForceMayWithYou'
    user.forName = 'luke'
    user.name = 'skywalker'
    user.email = 'luke.skywalker@rogue-squadron.org'
    // registering the success event
    vm.$on('userCreationFailure', () => {
      expect(vm.creationError).to.equal('error cheater !')
      done()
    })

    // fake server configuration
    server.respondWith(
      'POST', '/user',
      function (request) {
        let body = JSON.parse(request.requestBody)
        expect(body.identifier).to.equal('lukeSkywalker')
        expect(body.password).to.equal('theForceMayWithYou')
        expect(body.forName).to.equal('luke')
        expect(body.name).to.equal('skywalker')
        expect(body.email).to.equal('luke.skywalker@rogue-squadron.org')
        request.respond(400, {'Content-Type': 'application/json'}, '{"msg" : "error cheater !"}')
      }
    )
    // when
    vm.save()
    server.respond()
  })

  it('should emit userCreationFailure event when login failed without error message', done => {
    // given
    // create vue instance
    let Ctor = Vue.extend(UserCreation)
    let vm = new Ctor().$mount()
    let user = vm.user
    user.identifier = 'lukeSkywalker'
    user.password = 'theForceMayWithYou'
    user.forName = 'luke'
    user.name = 'skywalker'
    user.email = 'luke.skywalker@rogue-squadron.org'
    // registering the success event
    vm.$on('userCreationFailure', () => {
      expect(vm.creationError).to.equal('#UnknowError')
      done()
    })

    // fake server configuration
    server.respondWith(
      'POST', '/user',
      function (request) {
        let body = JSON.parse(request.requestBody)
        expect(body.identifier).to.equal('lukeSkywalker')
        expect(body.password).to.equal('theForceMayWithYou')
        expect(body.forName).to.equal('luke')
        expect(body.name).to.equal('skywalker')
        expect(body.email).to.equal('luke.skywalker@rogue-squadron.org')
        request.respond(400)
      }
    )
    // when
    vm.save()
    server.respond()
  })
})
