<!--todo field check + clear fields ? + form component + more test + do log automatically ?-->
<template>
  <div>
    <div class="container-fluid">
      <div class="alia-form-container">
        <div class="row col-md-4 col-md-offset-4 form-container">
          <form name="user-creation" class="alia-form">
            <div class="form-group">
              <label for="identifier">#UserIdentifier</label>
              <input type="text" class="form-control" id="identifier" name="identifier" v-model="user.identifier"/>
            </div>
            <div class="form-group">
              <label for="password">#Password</label>
              <input type="password" class="form-control" id="password" name="password" v-model="user.password"/>
            </div>
            <div class="form-group">
              <label for="forname">#Forname</label>
              <input type="text" class="form-control" id="forname" name="forname" v-model="user.forName"/>
            </div>
            <div class="form-group">
              <label for="lastname">#Lastname</label>
              <input type="text" class="form-control" id="lastname" name="lastname" v-model="user.name"/>
            </div>
            <div class="form-group">
              <label for="email">#Email</label>
              <input type="email" class="form-control" id="email" name="email" v-model="user.email"/>
            </div>
            <div>
              <button type="button" class="btn btn-primary btn-block" @click="save">Sign in</button>
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
        user: {},
        creationError: undefined
      }
    },
    methods: {
      save: function () {
        return this.$http.post('/user', this.user).then(response => {
          this.$emit('userCreationSuccess')
        }, response => {
          if (response.body.msg) {
            this.creationError = response.body.msg
          } else {
            this.creationError = '#UnknowError'
          }
          this.$emit('userCreationFailure')
        })
      }
    }
  }
</script>
