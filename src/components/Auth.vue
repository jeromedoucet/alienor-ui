<template>
  <div>
    <div class="container-fluid">
      <div class="alia-form-container">
        <div class="row col-md-4 col-md-offset-4">
          <form name="auth-form" class="alia-form">
            <div class="form-group">
              <label for="identifier">#UserIdentifier</label>
              <input data-rules="required" type="text"
                     class="form-control" id="identifier" name="identifier"
                     v-model="credential.login" placeholder="#UserIdentifierEx"/>
              <span v-show="false" class="help-block">#MandatoryField</span>
            </div>
            <div class="form-group">
              <label for="password">#Password</label>
              <input data-rules="required" type="password" class="form-control" id="password" name="password"
                     v-model="credential.pwd" placeholder="#PasswordEx"/>
              <span v-show="false" class="help-block">#MandatoryField</span>
            </div>
            <div class="form-group">
              <button type="button"
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
      login: function () {
        return this.$http.post('/login', this.credential).then(response => {
          this.$emit('loginSuccess')
        }, response => {
          this.loginError = response.body.msg ? response.body.msg : '#UnknowError'
          this.$emit('loginFailure')
        })
      }
    }
  }
</script>
