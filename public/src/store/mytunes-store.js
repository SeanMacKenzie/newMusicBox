import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: [],
    
  },
  mutations: {
    setResults(state, data){
      state.results = data.results
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        // var songList = data.results.map(function (song) {
        //   return{
        //     title: song.trackName,
        //     albumArt: song.artworkUrl60,
        //     artist: song.artistName,
        //     album: song.collectionName,
        //     preview: song.previewUrl
        //   }
        // })
        // return songList
        
        console.log('Music data', JSON.parse(data))
        commit('setResults', JSON.parse(data))
      })
    },

    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({commit, dispatch}, track){
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({commit, dispatch}, track){
      //Removes track from the database with delete
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
