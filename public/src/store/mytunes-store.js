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
    setResults(state, data) {
      state.results = data.results
    },

    setTunes(state, data) {
      state.myTunes = data.myTunes
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {


        console.log('Music data', JSON.parse(data))
        commit('setResults', JSON.parse(data))
      })
    },

    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      var baseUrl = 'http://localhost:3000/api/songs'
      $.get(baseUrl).then(data => {
        console.log('Tunes data', JSON.parse(data))
        commit('setTunes', JSON.parse(data))
      })
    },
    addToMyTunes({ commit, dispatch }, payload) {
      function Song(config) {
        this.title = config.result.trackName,
        this.albumArt = config.result.artworkUrl60,
        this.album = config.result.collectionName,
        this.artist = config.result.artistName,
        this.preview = config.result.previewUrl,
        this.playlistId = "5a14a134ef16270498d2a71d",
        this.playOrder = config.myTunes.length
      }
      var track = new Song(payload)
      //this will post to your server adding a new track to your tunes
      var baseUrl = 'http://localhost:3000/api/songs'
      $.post(baseUrl).then(data => {
        dispatch('getMyTunes')
      })
      .catch(err => {
        res.status(400).send(err)
      })
    },

    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
      $.ajax ({
        method: "DELETE",
        url: '//localhost:3000/api/songs' + track.song._id
      })
      .then(res => {
        dispatch('getMyTunes')
      })
      .catch(err => {
        res.status(400).send(err)
      })
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})


export default store
