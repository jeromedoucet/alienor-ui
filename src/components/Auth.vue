<template>
  <div class="container-fluid">
    <div class="login-form well well-lg ">
      <div class="row col-md-4 col-md-offset-4">
        <form name="authForm" class="auth-form">
          <div class="form-group">
            <label for="identifier">#Username</label>
            <input type="text" class="form-control" id="identifier" name="identifier"/>
          </div>
          <div class="form-group">
            <label for="password">#Password</label>
            <input type="password" class="form-control" id="password" name="password"/>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
  .login-form {
    margin-left: 33.3333%;
    margin-right: 33.3333%;
    margin-top: 50px;
  }
  .login-form .auth-form {
    margin: 5px;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
