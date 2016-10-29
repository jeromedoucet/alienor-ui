<template>
  <div class="container-fluid">
    <div class="login">
      <div class="row col-md-4 col-md-offset-4">
        <form name="authForm" class="auth-form">
          <div class="form-group">
            <label for="identifier">#UserIdentifier</label>
            <input type="text" class="form-control" id="identifier" name="identifier"/>
          </div>
          <div class="form-group">
            <label for="password">#Password</label>
            <input type="password" class="form-control" id="password" name="password"/>
          </div>
          <div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
  .login {
    margin-top: 50px;
  }

  .login .auth-form {
    border: .01em solid #e7e7e7;
    padding: 0.6em 0.6em;
    border-radius: 10px;
    background-color: white;
  }

  .login .auth-form {
    box-shadow: 10px 20px 30px #9ad3f3;
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
