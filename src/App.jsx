import React from 'react'
import Layout from './components/layout/Layout'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const App = () => {
  useEffect(()=>{
    Aos.init({duration:"1000"})
},[])
  return (
    <>
      <Layout/>
    </>
  )
}

export default App