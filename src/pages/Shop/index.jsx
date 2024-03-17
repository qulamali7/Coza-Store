import React from 'react'
import Products from "../../components/Products"
import { Helmet } from 'react-helmet-async'
import PageTitle from '../../components/PageTitle'
const Shop = () => {
  return (
    <>
     <Helmet>
        <title>Shop</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <PageTitle title={"Shop"} />
    <Products/>
    </>
  )
}

export default Shop