'use client'
import React, { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AuthToken } from "../types/auth.types";

// type AuthTokens = {
//   token: string;
// };

// const AUTH_TOKENS_KEY = "token";

// export const AuthContext = createContext({
//   login: (authTokens: AuthToken) => {},
//   logout: () => {},
//   isLoggedIn: false,
//   authTokens: '',
// });

// export default function AuthContextProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [authTokens, setAuthTokens] = useState <string>('');

//   useEffect(()=>{
//       setAuthTokens( localStorage.getItem(AUTH_TOKENS_KEY) ?? '' )
//   },[authTokens])

//   // const authTokensInLocalStorage = null &&  localStorage.getItem(AUTH_TOKENS_KEY);

//   const login = useCallback(function (authTokens: AuthToken) {
//     window.localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(authTokens));
//     setAuthTokens(JSON.stringify(authTokens));
//   }, []);

//   const logout = useCallback(function () {
//     window.localStorage.removeItem(AUTH_TOKENS_KEY);
//     setAuthTokens('');
//   }, []);

//   const value = useMemo(
//     () => ({
//       login,
//       logout,
//       authTokens,
//       isLoggedIn: authTokens !== '',
//     }),
//     [authTokens, login, logout]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

const AUTH_TOKENS_KEY = "token";

export const AuthContext = createContext({
  login: (authTokens: AuthToken) => {},
  logout: () => {},
  isLoggedIn: false,
  authTokens: null,
});

export default function AuthContextProvider({
  children ,}: {
    children : ReactNode
  }){
    
    const authTokensInLocalStorage = typeof window !=='undefined'? window.localStorage.getItem(AUTH_TOKENS_KEY): null;
    
    const [authTokens, setAuthTokens] = useState( 

      authTokensInLocalStorage === null
      ? null
      : JSON.parse(authTokensInLocalStorage))


    const login = useCallback(function (authTokens: AuthToken) {
      window.localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(authTokens));
      setAuthTokens(authTokens);
    }, []);


    const logout = useCallback(function () {
      window.localStorage.removeItem(AUTH_TOKENS_KEY);
      setAuthTokens(null);
    }, []);

    const value = useMemo(
      () => ({
        login,
        logout,
        authTokens,
        isLoggedIn: authTokens !== null,
      }),
      [authTokens, login, logout]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }
    
  

export function useAuthContext() {
  return useContext(AuthContext);
}
