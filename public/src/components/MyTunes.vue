<template>
    <div class="MyTunes text-center">
        <button @click="getMyTunes" class="btn btn-primary" id="get-tunes-button">Welome to the Space Jam</button>
    </div>


</template>

<script>
    export default {
        name: 'Mytunes',
        data () {
            return {

            }
        },
        methods: {
            getMyTunes(){
                this.store.dispatch('getMyTunes')
            },
            promoteMyTune(track, myTunes) {
                this.$store.dispatch('promoteTrack', { tune, myTunes })
            },
            demoteMyTune(track, myTunes) {
                this.$store.dispatch('demoteTrack', { track, myTunes })
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