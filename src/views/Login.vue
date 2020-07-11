<template>
  <div>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:700,600' rel='stylesheet'
          type='text/css'>

    <div class="box">
      <h1>Login</h1>

      <input v-model="user.email" type="text" name="login" placeholder="login" class="email"/>

      <input v-model="user.password" type="password" name="password" placeholder="password"
             class="password"/>

      <div @click="login" id="btn2">Log-in</div>

    </div> <!-- End Box -->
  </div>
</template>

<style scoped>
  p {
    font-size: 12px;
    text-decoration: none;
    color: #ffffff;
  }

  h1 {
    font-size: 1.5em;
    color: #525252;
  }

  .box {
    background: white;
    width: 300px;
    border-radius: 6px;
    margin: 0 auto 0 auto;
    padding: 0px 0px 70px 0px;
    border: #2980b9 4px solid;
  }

  .email {
    background: #ecf0f1;
    border: #ccc 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width: 250px;
    color: #AAAAAA;
    margin-top: 10px;
    font-size: 1em;
    border-radius: 4px;
  }

  .password {
    border-radius: 4px;
    background: #ecf0f1;
    border: #ccc 1px solid;
    padding: 8px;
    width: 250px;
    font-size: 1em;
  }

  #btn2 {
    float: left;
    background: #3498db;
    width: 125px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: white;
    border-radius: 4px;
    border: #2980b9 1px solid;

    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    font-weight: 800;
    font-size: 0.8em;
  }

  #btn2:hover {
    background: #3594D2;
  }
</style>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { Action } from 'vuex-class'

  const namespace: string = 'auth'

  @Component({
    components: {}
  })
  export default class Login extends Vue {
    private user = {
      email: '',
      password: '',
    }

    @Action('login', { namespace }) actionLogin: any

    public login() {
      this.actionLogin(this.user).then(() => {
        this.$router.push('/')
      })
    }
  }

</script>
