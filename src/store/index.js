import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count: 0,
      profil: []
  },
  getters: {
    profil: state => {
      return state.profil;
    }
  },
  mutations: {
    increment (state) {
      if(state.count < 50){
        state.count++
      }
    },
    decrement (state) {
      if(state.count > 0){
        state.count--
      }
    },
    SET_PROFILE (state, profil) {
        state.profil = profil
    }
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    fetchData ({ commit }) {
      axios.get('https://randomuser.me/api/')
      .then(function (response) {
          const profile = response.data.results[0];
          // console.log(profile.name.first);
          commit('SET_PROFILE', profile);
      })
    }
  },
  modules: {
  }
})
