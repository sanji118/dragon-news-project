import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import LatestNews from '../components/LatestNews'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <Main></Main>
    </div>
  )
}

export default Home