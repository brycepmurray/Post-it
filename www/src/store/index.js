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
        users: [],
        user: {},
        posts: [],
        comments: []
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload
        },
        addPost(state, payload) {
            state.posts.push(payload)
        },
        setComments(state, payload) {
            state.comments = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
        setUser(state, user) {
            state.user = user
        },
        addLikes(state, payload) {
            payload = state.posts.find(post => post._id == payload._id)
                // state.posts = payload
        },
        dislikes(state, payload) {
            payload = state.posts.find(post => post._id == payload._id)
                // state.posts = payload
        },
        setCommentsByPost(state, payload) {
            state.comments = payload
        }
    },

    actions: {

        createUser({ commit, dispatch }, payload) {
            auth.post('createUser', payload)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Main' })
                    console.log('User successfully created')
                })
                .catch(err => {
                    commit('handleError', err)
                })

        },

        login({ commit, dispatch }, payload) {
            auth.post('login', payload)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Main' })
                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        addPost({ commit, dispatch }, payload) {
            console.log("this is our object:", payload)
            api.post('posts', payload)
                .then(res => {
                    console.log("how about here?", res)
                    commit('addPost', res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
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
        // getUsers({ commit, dispatch }, payload) {
        //   api.get('users')
        //     .then(res => {
        //       commit('setUsers', res.data)
        //     })
        //     .catch(err => {
        //       console.log(err)
        //     })
        // },
        addLike({ commit, dispatch }, payload) {
            api.put('posts/' + payload._id, { likes: ++payload.likes })
                .then(res => {
                    commit('addLikes', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        dislike({ commit, dispatch }, payload) {
            api.put('posts/' + payload._id, { dislikes: ++payload.dislikes })
                .then(res => {
                    commit('dislikes', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getCommentsByPost({ commit, dispatch }, post) {
            api.get(`posts/${post._id}/comments`)
                .then(res => {
                    commit('setCommentsByPost', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // setUser({ commit, dispatch }, user) {
        //   commit('setUser', user)
        // },
        addComment({ commit, dispatch }, comment) {
            // console.log(comment)
            api.post('comments', comment)
                .then(() => {
                    console.log('added new comment')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        updateComment({ commit, dispatch }, comment) {
            // console.log(comment)
            api.put(`comments/${comment._id}`, comment)
                .then(() => {
                    console.log('added new comment')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteComment({ commit, dispatch }, comment) {
            console.log(comment)
            api.delete(`comments/${comment._id}`)
                .then(() => {
                    console.log('deleted the comment')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})