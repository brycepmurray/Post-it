import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import UserPosts from '@/components/UserPosts'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: 'users/:userId/posts',
            name: 'UserPosts',
            component: UserPosts
          },
        
    ]
})