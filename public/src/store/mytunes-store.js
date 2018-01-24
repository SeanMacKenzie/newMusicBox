import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'


var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//newmusicbox.herokuapp.com' : '//localhost:3000';

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
      // var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      // var apiUrl = url + encodeURIComponent(url2);
      $.get(url2).then(data => {


        
        commit('setResults', JSON.parse(data))
      })
    },

    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      var base = baseUrl + '/api/songs'
      $.get(base).then(data => {
        
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
      var base = baseUrl + '/api/songs'

      $.post(base, song).then(response => {
        dispatch('getMyTunes')
      })
        .catch(err => {
          console.log(err)
        })
    },

    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
      var base = baseUrl + '/api/songs/'
      $.ajax({
        method: "DELETE",
        url: base + track._id
      })
        .then(res => {
          dispatch('getMyTunes')
        })
        .fail(err => {
          console.log(err)
        })
    },
    

  }
})


export default store
