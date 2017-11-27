<template>
    <div class="Itunes text-center">
        <h1>Music Box</h1>
        <form @submit.prevent="getMusicByArtist">
            <input type="text" class="form-control" name="artist" placeholder="Artist Name" v-model="artist"/>
            <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
        </form>
        <div class="col-sm-12 red-border" v-for="song in results">
            <img :src="song.artworkUrl60">
            <h4>{{song.artistName}}</h4>
            <h6>{{song.collectionName}}</h6>
            <h4>{{song.trackName}}</h4>
            <audio :src="song.previewUrl" controls="controls"></audio>
            <button @click="addToPlaylist" class="btn btn-primary" id="add-track">Add</button>
        </div>
        
        
        
        
        
        








    </div>
</template>




    




<script>
    export default {
        name: 'Itunes',
        data() {
            return {
                artist: '',
                track: '',

            }
        },
        methods: {
            getMusicByArtist(){
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToPlaylist(){
                this.$store.dispatch('addToMyTunes', this.track)
            }

        },
        computed: {
            results() {
                return this.$store.state.results   
            }
        }
    }



</script>

<style>



</style>