import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'

const Layout = ({children, isAuth, userInfo}) => {
    const [fSize, setFSize] = useState(16)
  return (
    

    
    <div style={{fontSize: `${fSize}px`}}>
        <Header isAuth={isAuth} userInfo={userInfo} setFontSize={setFSize}/>
        {children}
    </div>
  )
}

export default Layout;