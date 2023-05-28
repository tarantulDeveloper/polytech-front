import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";


const Layout = ({ children, isAuth, userInfo }) => {
  const [selectedFontSize, setSelectedFontSize] = useState(sessionStorage.getItem("fontSize"));
  const handleFontSizeClick = (fontSize) => {
    sessionStorage.setItem("fontSize",fontSize)
    setSelectedFontSize(fontSize);
  };
  const [fontColor, setFontColor] = useState(sessionStorage.getItem("color"));
  const handleFontColorChange = (color) => {
    sessionStorage.setItem("color", color)
    setFontColor(color);
  };

  const [backgroundColor, setBackgroundColor] = useState(sessionStorage.getItem("background"));
  const handleColorChange = (color) => {
    if(color === "yellow" || color === "white") {
      setFontColor("black")
    } else {
      setFontColor("white")
    }
    sessionStorage.setItem("background", color)
    setBackgroundColor(color);
  };

  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontSize: `${selectedFontSize}px`,
        background: `${backgroundColor}`,
        color: `${fontColor}`,
      }}
    >
      <Header
        isAuth={isAuth}
        userInfo={userInfo}
        handleFontSizeClick={handleFontSizeClick}
        backgroundColor={backgroundColor}
        handleColorChange={handleColorChange}
        handleFontColorChange={handleFontColorChange}
      />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
