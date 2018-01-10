<template>
  <div class="container">
    <div class="row alpha jumbotron">
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
    min-height: 10vh;
    min-width: 50%;
    background:white;
  }

  .jumbotron {
    background-image: url(https://static.pexels.com/photos/96857/pexels-photo-96857.jpeg);
    background-position: center;
    background-size: cover;
    color: white;
    font-family: 'Amatic SC', cursive;
  }

  .itunes {
    display: inline-block;
    background: white;
    min-height: 10vh;
    min-width: 45%;
  }
</style>