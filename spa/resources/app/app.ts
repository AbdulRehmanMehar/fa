import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';


new Vue({
    data() {
        return {
            applicationName: 'Pitnik'
        }
    },
    router,
    render: h => h(App),
}).$mount('#app');