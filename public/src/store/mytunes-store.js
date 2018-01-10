import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//' : '//localhost:3000';

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
      state.myTunes = data
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {


        
        commit('setResults', JSON.parse(data))
      })
    },

    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      var baseUrl = 'http://localhost:3000/api/songs'
      $.get(baseUrl).then(data => {
        
        commit('setTunes', data)
      })
    },
    addToMyTunes({ commit, dispatch }, payload) {
      var song = {
        title: payload.track.trackName,
        artist: payload.track.artistName,
        albumArt: payload.track.artworkUrl60,
        album: payload.track.collectionName,
        preview: payload.track.previewUrl,
        playlistId: "5a14a134ef16270498d2a71d",
        playOrder: payload.myTunes.length
      }

      
      //this will post to your server adding a new track to your tunes
      var baseUrl = '//localhost:3000/api/songs'

      $.post(baseUrl, song).then(response => {
        dispatch('getMyTunes')
      })
        .catch(err => {
          console.log(err)
        })
    },

    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
      console.log('public side', track)
      $.ajax({
        method: "DELETE",
        url: '//localhost:3000/api/songs/' + track._id
      })
        .then(res => {
          dispatch('getMyTunes')
        })
        .fail(err => {
          console.log(err)
        })
    },
    promoteTrack({ commit, dispatch }, payload) {
      //this should increase the position / upvotes and downvotes on the track
      var baseUrl = '//localhost:3000/api/songs/'
      console.log(payload)
      function promote(songId, myTunes) {

        var songIndex = payload.myTunes.indexOf(payload.myTunes.find((song, index) => {
          if (songId == song.id) {
            return song
          }
        }))
        if (songIndex === 0) {
          return
        }
        var song = payload.myTunes.splice(songIndex, 1)
        payload.myTunes.splice(songIndex -= 1, 0, song[0])
      }

     
      for (var i = 0; i < payload.myTunes.length; i++) {
        if (payload.myTunes[i]._id == payload.track._id) {

          $.ajax({
            method: "PUT",
            url: baseUrl + payload.myTunes[i]._id,
            data: {  }
          })
          .then(res => { dispatch('getMyTunes') })
          .fail(err => {
            res.status(400).send(err)
          })
          
        }
      }

    },
    demoteTrack({ commit, dispatch }, payload) {
      //this should decrease the position / upvotes and downvotes on the track
      for (var i = 0; i < payload.myTunes.length; i++) {
        if (payload.myTunes[i]._id == payload.track._id) {
          $.ajax({
            method: "PUT",
            url: "//localhost:3000/api/songs" + payload.myTunes[i]._id,
            data: { order: payload.myTunes[i].order + 1 }
          })
            .then(res => { dispatch('getMyTunes') })
            .fail(err => {
              res.status(400).send(err)
            })
        }
      }
    }

  }
})


export default store
