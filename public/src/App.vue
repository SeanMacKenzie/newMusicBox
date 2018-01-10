<template>
  <div id="app" class="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  .app {
    background-image: url(https://www.transparenttextures.com/patterns/3px-tile.png);
    background-color: #2b2628;
    min-height: 100vh;
  }
</style>
