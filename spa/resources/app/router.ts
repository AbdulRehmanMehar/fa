import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let checkUserIfAuthenticated = () => {
    return true
}

let authGuard = (to: any, from: any, next: (p?: { name: string }) => any) => {
    if (checkUserIfAuthenticated()) {
        return next()
    }
    return next({ name: 'login' })
}

let authGuardInverted = (to: any, from: any, next: (p?: { name: string }) => any) => {
    if (!checkUserIfAuthenticated()) {
        return next()
    }
    return next({ name: 'home' })
}


export default new VueRouter({
    linkExactActiveClass: "active",
    routes: [


        {
            path: '/',
            name: 'home-wrapper',
            beforeEnter: authGuard,
            component: () => import('@/views/authenticated/Authenticated.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('@/views/authenticated/Home.vue')
                },

                {
                    path: 'profile/:username?',
                    name: 'profile-wrapper',
                    component: () => import('@/views/authenticated/Profile/Profile.vue'),

                    children: [
                        {
                            path: '',
                            name: 'profile',
                            component: () => import('@/views/authenticated/Profile/Timeline.vue')
                        },
                        {
                            path: 'about',
                            name: 'profile-about',
                            component: () => import('@/views/authenticated/Profile/About.vue')
                        },
                        {
                            path: 'friends',
                            name: 'profile-friend-list',
                            component: () => import('@/views/authenticated/Profile/Friends.vue')
                        },
                        {
                            path: 'photos',
                            name: 'profile-photo-list',
                            component: () => import('@/views/authenticated/Profile/Photos.vue')
                        },
                        {
                            path: 'videos',
                            name: 'profile-video-list',
                            component: () => import('@/views/authenticated/Profile/Videos.vue')
                        },
                    ]
                },

            ]
        },

        {
            path: '/forum',
            name: 'forum-wrapper',
            component: () => import('@/views/forum/Forum.vue'),

            children: [
                {
                    path: '',
                    name: 'forum',
                    component: () => import('@/views/forum/Main.vue'),
                },

                {
                    path: 'create-topic',
                    name: 'forum-create-topic',
                    beforeEnter: authGuard,
                    component: () => import('@/views/forum/CreateTopic.vue'),
                }
            ]
        },

        {
            path: '/page/:slug?',
            name: 'page-wrapper',
            component: () => import('@/views/page/Page.vue'),
            children: [
                {
                    path: '',
                    name: 'page',
                    component: () => import('@/views/page/Feed.vue'),
                },

                {
                    path: 'followers',
                    name: 'page-followers',
                    component: () => import('@/views/page/Followers.vue'),
                },

                {
                    path: 'events',
                    name: 'page-events',
                    component: () => import('@/views/page/Events.vue'),
                },
            ]
        },



        {
            path: '/user-authentication',
            component: () => import('@/views/UserAuthentication.vue'),
            beforeEnter: authGuardInverted,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/components/Login.vue')
                },
                {
                    path: 'signup',
                    name: 'register',
                    component: () => import('@/components/Register.vue')
                },
            ]
        },
    ]
})
