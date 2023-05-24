import React, { useEffect } from "react";

import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";

import { auth } from "../Auth";

import 'firebaseui/dist/firebaseui.css';
import './styles.css';

// Configure FirebaseUI.
export const uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

export function Login() {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start('.auth-wrapper', uiConfig);
    });

    return <div className="auth-wrapper"></div>;
};
