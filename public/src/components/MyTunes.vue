<template>
    <div class="MyTunes text-center">
        <!-- <button @click="getMyTunes" class="btn btn-primary" id="get-tunes-button">Welome to the Space Jam</button> -->
        <div class="col-sm-12 red-border" v-for="song in myTunes">
            <img :src="song.artworkUrl60">
            <h4>{{song.artistName}}</h4>
            <h6>{{song.collectionName}}</h6>
            <h4>{{song.trackName}}</h4>
            <audio :src="song.previewUrl" controls="controls"></audio>
            <button @click="promoteMySong(track, myTunes)" class="btn btn-primary" id="promote">Promote</button>
            <button @click="demoteMySong(track, myTunes)" class="btn btn-danger" id="demote">Demote</button>
            <button @click="removeMySong(track, myTunes)" class="btn btn-danger" id="remove">Remove from list</button>

        </div>
    </div>


</template>

<script>
    export default {
        name: 'MyTunes',
        data() {
            return {

            }
        },
        methods: {
            getMyTunes() {
                this.store.dispatch('getMyTunes')
            },
            promoteMySong(track, myTunes) {
                this.$store.dispatch('promoteTrack', { tune, myTunes })
            },
            demoteMySong(track, myTunes) {
                this.$store.dispatch('demoteTrack', { track, myTunes })
            },
            removeMySong(track, myTunes) {
                this.$store.dispatch('removeTrack', { track, myTunes })
            }

        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
            }
        }
    }



</script>

<style>
</style>