import React from 'react'
import "./index.scss";
import Card from '../Card';
const Cards = () => {
  return (
    <>
    <div className='cards'>
        <div className='cards_container'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    </>
  )
}

export default Cards