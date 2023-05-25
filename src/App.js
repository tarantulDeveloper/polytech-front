import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import { useState, useEffect } from "react";
import AdminPage from "./pages/AdminPage";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    getUserInfoFromSessionStorage();
    console.log("first render")
  }, [])

  useEffect(() => {
    getUserInfoFromSessionStorage();
  }, []);

  useEffect(() => {
    console.log("isAuth or userInfo has changed");
    // Handle navbar text update here
  }, [isAuth, userInfo]);

  const getUserInfoFromSessionStorage = () => {
    setIsAuth(sessionStorage.getItem("isAuth"));
    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo")));
  }
  return (
    <BrowserRouter>
      <Layout isAuth={isAuth} userInfo={userInfo}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage setIsAuth={setIsAuth} setUserInfo={setUserInfo} />} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
