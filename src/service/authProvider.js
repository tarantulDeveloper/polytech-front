import { useState, useEffect } from "react";

let isAuth = sessionStorage.getItem("isAuth");
let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

const setIsAuth = (value) => {
  isAuth = value;
};

const setUserInfo = (value) => {
  userInfo = value;
};

const useAuth = () => {
  const [authState, setAuthState] = useState({ isAuth, userInfo });

  useEffect(() => {
    setAuthState({ isAuth, userInfo });
  }, []);

  return [authState, setIsAuth, setUserInfo];
};

export default useAuth;