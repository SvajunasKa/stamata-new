<template>
  <div id="app">
   <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<script>
  import Header from "./Components/Header"
  import Main from "./Components/Main"
export default {
  name: 'app',
  components:{
    appHeader: Header,
    appMain: Main
  }
}
</script>


<style lang="scss">

</style>
