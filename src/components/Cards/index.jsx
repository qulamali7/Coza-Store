import React from 'react'
import "./index.scss";
import Card from '../Card';
const Cards = () => {
  return (
    <>
    <div className='cards'>
        <div className='cards_container'>
            <Card img={"https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"} title={"Women"}/>
            <Card img={"https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp"} title={"Men"}/>
            <Card img={"https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp"} title={"Accessories"}/>
        </div>
    </div>
    </>
  )
}

export default Cards