import { useContext, createContext } from "react";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() => {
    return useContext(AuthContext)
}




const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup (auth, provider)
    .then((result) =>{
        const name = result.user.displayName

        localStorage.setItem("name", name)
        
    }).catch((error) =>{
        console.log(error)
    });
};