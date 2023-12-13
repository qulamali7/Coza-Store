import React from 'react'
import Products from '../../components/Products'
import Cards from '../../components/Cards'
import Slider from '../../components/Slider'
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Slider />
      <Cards />
      <Products />
    </>
  )
}

export default Home