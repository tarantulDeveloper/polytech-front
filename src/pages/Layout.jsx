import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'

const Layout = ({children, isAuth, userInfo}) => {
    
  return (
    

    
    <div>
        <Header isAuth={isAuth} userInfo={userInfo}/>
        {children}
    </div>
  )
}

export default Layout;