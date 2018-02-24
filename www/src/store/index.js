//main store file

import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

var api = axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
  state: {
    //DUMMY DATA
    user: {},
    posts: [{
      "createdAt": "2018-02-23T23:18:02.415Z",
      "_id": "5a90a683c0112e197c23478e",
      "userId": "5a90a16cc0112e197c234788",
      "title": "Find my parents",
      "desc": "Help me find my biological parents, Jor-El is my father and my mother is Lara-El. They are on the planet Krypton",
      "imgUrl": "https://vignette.wikia.nocookie.net/superman/images/f/f5/Krypton_-_Gods_and_Monsters.jpg",
      "likes": 4,
      "dislikes": 4,
    }],
    comments: [],
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    },
    setUsers(state, payload) {
      state.user = payload
    }
  },

  actions: {
    addPost({ commit, dispatch }, payload) {
      commit('addPost', payload)
    },
    getPosts({ commit, dispatch }, payload) {
      api.get('posts')
        .then(res => {
          commit('setPosts', res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUsers({ commit, dispatch }, payload) {
      api.get('users')
        .then(res => {
          commit('setUsers', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})