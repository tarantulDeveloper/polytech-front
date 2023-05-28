import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

const MyPuffLoader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
        <MoonLoader color={"#32a852"} size={180} />
    </div>
  )
}

export default MyPuffLoader;