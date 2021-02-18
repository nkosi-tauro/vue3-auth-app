import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC5bJaMF6XAmr3Z4XlfAHeHAOIdI_iJzCw",
    authDomain: "test-63eb7.firebaseapp.com",
    databaseURL: "https://test-63eb7.firebaseio.com",
    projectId: "test-63eb7",
    storageBucket: "test-63eb7.appspot.com",
    messagingSenderId: "601897179957",
    appId: "1:601897179957:web:8e35d0edeafc71ae5bca7c"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
