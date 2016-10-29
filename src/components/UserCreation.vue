<template>
  <div>
    <div class="container-fluid">
      <div class="user-creation">
        <div class="row col-md-4 col-md-offset-4 form-container">
          <form name="user-creation" class="signin-form">
            <div class="form-group">
              <label for="identifier">#UserIdentifier</label>
              <input type="text" class="form-control" id="identifier" name="identifier"/>
            </div>
            <div class="form-group">
              <label for="password">#Password</label>
              <input type="password" class="form-control" id="password" name="password"/>
            </div>
            <div class="form-group">
              <label for="forname">#Forname</label>
              <input type="text" class="form-control" id="forname" name="forname"/>
            </div>
            <div class="form-group">
              <label for="lastname">#Lastname</label>
              <input type="text" class="form-control" id="lastname" name="lastname"/>
            </div>
            <div class="form-group">
              <label for="email">#Email</label>
              <input type="email" class="form-control" id="email" name="email"/>
            </div>
            <div>
              <button type="submit" class="btn btn-primary btn-block">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .user-creation {
    margin-top: 50px;
  }

  .user-creation .signin-form {
    border: .01em solid #e7e7e7;
    padding: 0.6em 0.6em;
    border-radius: 10px;
    background-color: white;
  }

  .user-creation .signin-form {
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
