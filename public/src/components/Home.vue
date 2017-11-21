<template>
  <div class="container">
    <div class="row alpha">

      <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
      <my-tunes class="col-md-6 my-tunes">

      </my-tunes>

      <itunes class="col-md-6 itunes">

      </itunes>
    </div>
  </div>
</template>

<script>
  import Itunes from './Itunes'
  import MyTunes from './MyTunes'

  export default {
    components: {
      Itunes,
      MyTunes
    }
  }
</script>


<style>
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 45%;
  }
</style>