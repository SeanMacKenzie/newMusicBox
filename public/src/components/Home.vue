<template>
  <div class="container">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <my-tunes class="row alpha my-tunes">

    </my-tunes>

    <itunes class="row beta itunes">

    </itunes>
  </div>
</template>

<script>
  import ITunes from './ITunes'
  import MyTunes from './MyTunes'

  export default {
    components: {
      ITunes,
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