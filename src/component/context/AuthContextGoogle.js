import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../FirebaseConfig";

const provider = new GoogleAuthProvider ();

const signInWithGoogle = () => {
    signInWithPopup (auth, provider)
    .then((result)=> {
        const name = result.user.displayName;

        localStorage.setItem("name", name)
        
    })
    .catch((error)=>{
        alert('failed to sign in, please try again')
    })
};
export default signInWithGoogle;