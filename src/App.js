import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import { useEffect } from "react";
import AdminPage from "./pages/AdminPage";
import AdminHomeContentPage from "./pages/AdminHomeContentPage";
import RequireAuth from "./service/RequireAuth";
import AdminHomeContentUpdate from "./pages/AdminHomeContentUpdate";
import AboutUsPage from "./pages/AboutUsPage";
import useAuth from "./service/authProvider";
import AboutUsUpdatePage from "./pages/AboutUsUpdatePage";
import CarouselPage from "./pages/CarouselPage";
import CarouselUpdatePage from "./pages/CarouselUpdatePage";
import ClinicPage from "./pages/ClinicPage";
import ClinicUpdatePage from "./pages/ClinicUpdatePage";
import ClinicClientPage from "./pages/ClinicClientPage";
import ClinicClientDetailedPage from "./pages/ClinicClientDetailedPage";
import ClientServicePage from "./pages/ClientServicePage";
import CreateFeedbackPage from "./pages/CreateFeedbackPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceUpdatePage from "./pages/ServiceUpdatePage"
import { useState } from "react";
import NewsPage from "./pages/NewsPage";
import NewsUpdatePage from "./pages/NewsUpdatePage";
import NewsDetailedPage from "./pages/NewsDetailedPage";
import AllNewsPage from "./pages/AllNewsPage";
import AppealPage from "./pages/AppealPage";
import AdminsPage from "./pages/AdminsPage";


function App() {
  const [authState, setIsAuth, setUserInfo] = useAuth();
  const { isAuth, userInfo } = authState;

  useEffect(() => {
    getUserInfoFromSessionStorage();
    if (!sessionStorage.getItem("color")) {
      sessionStorage.setItem("color", "black");
    }

    if (!sessionStorage.getItem("background")) {
      sessionStorage.setItem("background", "white");
    }

    if (!sessionStorage.getItem("fontSize")) {
      sessionStorage.setItem("fontSize", "16px");
    }
    console.log(sessionStorage.getItem("background"));
  }, [])


  useEffect(() => {
    console.log("isAuth or userInfo has changed");
    getUserInfoFromSessionStorage();
  }, [isAuth, userInfo]);

  const getUserInfoFromSessionStorage = () => {
    setIsAuth(sessionStorage.getItem("isAuth"));
    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo")));
  }


  return (
    <BrowserRouter >
      <Layout isAuth={isAuth} userInfo={userInfo} >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} setUserInfo={setUserInfo} />} />
          <Route path="/rehabilitation/:oblast" element={<ClinicClientPage />} />
          <Route path="/rehabilitation/detailed/:id" element={<ClinicClientDetailedPage />} />
          <Route path="/service/:id" element={<ClientServicePage />} />
          <Route path="/feedback/:id" element={<CreateFeedbackPage />} />
          <Route path="/news" element={<AllNewsPage />} />
          <Route path="/news-detailed" element={<NewsDetailedPage />} />
          <Route path="/admin-home-content" element={
            <RequireAuth isAuth={isAuth}>
              <AdminHomeContentPage />
            </RequireAuth>
          } />
          <Route path="/admin-page" element={
            <RequireAuth isAuth={isAuth}>
              <AdminPage />
            </RequireAuth>
          } />
          <Route path="/admin-list" element={
            <RequireAuth isAuth={isAuth}>
              <AdminsPage />
            </RequireAuth>
          } />
          <Route path="/admin-home-content-update/:id" element={
            <RequireAuth isAuth={isAuth}>
              <AdminHomeContentUpdate />
            </RequireAuth>
          } />
          <Route path="/about-us" element={
            <RequireAuth isAuth={isAuth}>
              <AboutUsPage />
            </RequireAuth>
          } />
          <Route path="/about-us-update/:id" element={
            <RequireAuth isAuth={isAuth}>
              <AboutUsUpdatePage />
            </RequireAuth>
          } />
          <Route path="/carousel" element={
            <RequireAuth isAuth={isAuth}>
              <CarouselPage />
            </RequireAuth>
          } />
          <Route path="/carousel/:id" element={
            <RequireAuth isAuth={isAuth}>
              <CarouselUpdatePage />
            </RequireAuth>
          } />
          <Route path="/clinics" element={
            <RequireAuth isAuth={isAuth}>
              <ClinicPage />
            </RequireAuth>
          } />
          <Route path="/clinic-update/:id" element={
            <RequireAuth isAuth={isAuth}>
              <ClinicUpdatePage />
            </RequireAuth>
          } />
          <Route path="/admin/service" element={
            <RequireAuth isAuth={isAuth}>
              <ServicesPage />
            </RequireAuth>
          } />
          <Route path="/service/update" element={
            <RequireAuth isAuth={isAuth}>
              <ServiceUpdatePage />
            </RequireAuth>
          } />
          <Route path="/news-admin" element={
            <RequireAuth isAuth={isAuth}>
              <NewsPage />
            </RequireAuth>
          } />
          <Route path="/news-admin-update/:id" element={
            <RequireAuth isAuth={isAuth}>
              <NewsUpdatePage />
            </RequireAuth>
          } />
          <Route path="/appeals" element={
            <RequireAuth isAuth={isAuth}>
              <AppealPage />
            </RequireAuth>
          } />

        </Routes>
      </Layout>

    </BrowserRouter>
  );

}

export default App;