import React,{useState} from 'react'

import {BallTriangle, Triangle} from "react-loader-spinner"
const Loader = ({load},{setLoad}) => {
  return (
    <div className='loader h-screen w-screen flex justify-center items-center bg-gradient-to-b from-purple-300  via-rose-200 bg-blue-300 fixed'>
        <BallTriangle
      height="80"
      width="200"
      color="purple"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      />
    </div>


  )
}

export default Loader