<template>
  <div>
    <div class="container-fluid">
      <div class="alia-form-container">
        <div class="row col-md-4 col-md-offset-4">
          <form name="auth-form" class="alia-form">
            <div class="form-group" :class="{'has-error': errors.has('identifier')}">
              <label for="identifier">#UserIdentifier</label>
              <input v-validate data-rules="required" type="text"
                     class="form-control" id="identifier" name="identifier" v-model="credential.login"
                     placeholder="#UserIdentifierEx"/>
              <span v-show="errors.has('identifier')" class="help-block">#MandatoryField</span>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('password')}">
              <label for="password">#Password</label>
              <input v-validate data-rules="required" type="password" class="form-control" id="password" name="password"
                     v-model="credential.pwd" placeholder="#PasswordEx"/>
              <span v-show="errors.has('password')" class="help-block">#MandatoryField</span>
            </div>
            <div class="form-group" :class="{'has-error': loginError}">
              <button :disabled="errors.any() || ! (fields.identifier.dirty && fields.password.dirty)" type="button"
                      class="btn btn-primary btn-block"
                      @click="login">#Login
              </button>
              <span v-show="loginError" class="help-block">{{loginError}}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../share/css/form.css">
</style>
<script>
  export default{
    data () {
      return {
        credential: {},
        loginError: undefined
      }
    },
    methods: {
      login: function () { // todo test me
        this.$http.post('/login', this.credential).then(function (response) {
          console.log(response.status)
        }, function (response) {
          if (response.body.Msg) {
            this.loginError = response.body.Msg
          } else {
            this.loginError = '#UnknowError'
          }
        })
      }
    }
  }
</script>
