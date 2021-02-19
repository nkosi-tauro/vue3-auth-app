import { reactive, toRefs } from "vue";
import firebase from 'firebase'

const state = reactive({
    name: "",
    image : ""
  });

export default function firebaseUser() {
    const fetchUser = async () => {
        const user = firebase.auth().currentUser;
        if (user) {
            console.log(user)
            state.name = user.displayName || user.email.split("@")[0];
            state.image = user.photoURL || `https://eu.ui-avatars.com/api/?name=${state.name[0]}&size=1000`
        }
    }

    return {
        ...toRefs(state), // convert to refs when returning
        fetchUser
    }
}