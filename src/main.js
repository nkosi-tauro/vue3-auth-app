import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import firebase from "firebase"

const firebaseConfig = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: "https://test-63eb7.firebaseio.com",
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: "test-63eb7.appspot.com",
    messagingSenderId: process.env.VUE_APP_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
};
firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
