<template>
  <div class="container">
    <div class="row alpha">
      <h1>Music Box</h1>
    </div>
    <div class="row beta">


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
    background: rgb(5, 41, 36);
  }

  .itunes {
    display: inline-block;
    background: rgb(0, 225, 255);
    min-height: 500px;
    min-width: 45%;
  }
</style>