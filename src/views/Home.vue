<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import axios from 'axios'

  @Component({
    components: {}
  })
  export default class Home extends Vue {
    created(): void {
      axios.get('https://reqres.in/api/users')
    }
  }

</script>
