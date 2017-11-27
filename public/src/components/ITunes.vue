<template>
    <div class="Itunes text-center">
        <h1>Music Box</h1>
        <form @submit.prevent="getMusicByArtist">
            <input type="text" class="form-control" name="artist" placeholder="Artist Name" v-model="artist" />
            <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
        </form>
        <div class="col-sm-12 red-border" v-for="track in results">
            <img :src="track.artworkUrl60">
            <h4>{{track.artistName}}</h4>
            <h6>{{track.collectionName}}</h6>
            <h4>{{track.trackName}}</h4>
            <audio :src="track.previewUrl" controls="controls"></audio>
            <button @click="addToPlaylist(track, myTunes)" class="btn btn-primary" id="add-track">Add</button>
        </div>


    </div>
</template>




<script>
    export default {
        name: 'ITunes',
        data() {
            return {
                artist: '',
                track: '',
                

            }
        },
        methods: {
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToPlaylist(track, myTunes) {
                this.$store.dispatch('addToMyTunes', { track, myTunes })
            }

        },
        computed: {
            results() {
                return this.$store.state.results
            },
            myTunes() {
                return this.$store.state.myTunes
            }
        }
    }



</script>

<style>
</style>
















