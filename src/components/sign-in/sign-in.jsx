
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";


const signIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1> Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>

        </div>
    )
}

export default signIn;