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
    posts: [],
    comments: [],
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    },
    setComments(state, payload) {
      state.comments = payload
    },
    setUsers(state, payload) {
      state.user = payload
    },
    addLikes(state,payload){
      payload = state.posts.find(post=>post._id == payload._id)
      // state.posts = payload
    },
    dislikes(state,payload){
      payload = state.posts.find(post=>post._id == payload._id)
      // state.posts = payload
    },
    setCommentsByPost(state, payload) {
      state.comments = payload
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
        })
        .catch(err => {
          console.log(err)
        })
    },
    getComments({ commit, dispatch }, payload) {
      api.get('comments')
        .then(res => {
          commit('setComments', res.data)
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
    },
    addLike({commit, dispatch}, payload){
      api.put('posts/' + payload._id, {likes:++payload.likes})
      .then(res =>{
        commit('addLikes', res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    },
    dislike({commit, dispatch}, payload){
      api.put('posts/' + payload._id, {dislikes:++payload.dislikes})
      .then(res =>{
        commit('dislikes', res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    },
    getCommentsByPost({commit, dispatch}, post) {
      api.get(`posts/${post._id}/comments`)
      .then(res => {
        commit('setCommentsByPost', res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    },
  }
})