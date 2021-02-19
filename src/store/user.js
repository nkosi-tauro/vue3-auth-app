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
            state.name = user.email;
            state.image = user.photoURL || `https://eu.ui-avatars.com/api/?name=${state.name[0]}&size=1000`
        }
    }

    return {
        ...toRefs(state), // convert to refs when returning
        fetchUser
    }
}