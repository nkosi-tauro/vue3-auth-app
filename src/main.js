import { createApp, reactive, onUnmounted, toRefs } from 'vue'
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

// firestore
const db = firebase.firestore()
const userCollection = db.collection('userData')

// Add new user data
export const createUser = user => {
    return userCollection.add(user)
}

// get data
export const getUser = async id => {
    const user = await userCollection.doc(id).get()
    return user.exists ? user.data() : null 
}

// update data
export const updateUser = (id, user) => {
    return userCollection.doc(id).update(user)
}

// delete data
export const deleteUser = id => {
    return userCollection.doc(id).delete()
}



createApp(App).use(router).mount('#app')
