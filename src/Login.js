import React from 'react'
import { GoogleOutlined} from '@ant-design/icons'
import firebase from 'firebase/compat/app';
import { auth } from './firebase'

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Chatgram!🔥</h2>

                <div className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign in with Google
                </div>
            </div>
        </div>
    )
}

export default Login
