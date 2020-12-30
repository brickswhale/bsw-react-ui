import React, { useState, useEffect, useMemo, createContext, useContext, useReducer } from "react";

let initialState = {
    user: null,
    authToken: null
}

export const AuthContext = createContext(initialState);
export const useCartProvider = () => {
  return useContext(CartContext);
}

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
        return {
            ...prevState,
            user: action.user
        }
    case 'SIGN_OUT':
        return {
            ...prevState,
            user: null
        }
    case 'SET_USER':
        return {
            ...prevState,
            user: action.user
        }
    default: 
      return prevState;
  }
}


function AuthProvider(props) {
    const { user=null, mode, children } = props;
    /* 
    mode:
    store auth data in localstorage
    store auth data in session
    store auth data in cookie
    */
    const [state, dispatch] = useReducer(reducer, initialState);

    const methods = useMemo(()=>({
        signIn: (user) => {
            dispatch({ type: 'SIGN_IN', user: user });
        },
        signOut: () => {
            dispatch({ type: 'SIGN_OUT' });
        },
        setUser: (user) => {
            dispatch({ type: 'SET_USER', user: user });
        },

    }),[]);
    
    useEffect(() => {
        if (user != null) {
            methods.setUser(user);
        }
    },[user]);

    return (
        <AuthContext.Provider value={[state, methods]}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;