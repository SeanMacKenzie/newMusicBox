<template>
    <div class="MyTunes text-center">
        <!-- <button @click="getMyTunes" class="btn btn-primary" id="get-tunes-button">Welcome to the Space Jam</button> -->
        <div class="col-sm-12 red-border" v-for="track in myTunes">
            <img :src="track.albumArt">
            <h4>{{track.artist}}</h4>
            <h6>{{track.album}}</h6>
            <h4>{{track.title}}</h4>
            <audio :src="track.preview" controls="controls"></audio>
            <button @click="promoteMySong(track, myTunes)" class="btn btn-primary" id="promote">Promote</button>
            <button @click="demoteMySong(track, myTunes)" class="btn btn-caution" id="demote">Demote</button>
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
        mounted() {
            this.$store.dispatch('getMyTunes')

        },
        methods: {
            getMyTunes() {
                this.$store.dispatch('getMyTunes')
            },
            promoteMySong(track, myTunes) {
                this.$store.dispatch('promoteTrack', { track, myTunes })
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