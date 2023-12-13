import React from 'react'
import "./index.scss";
const PageTitle = ({title}) => {
  return (
    <>
    <section className='page_title'>
        <h2>{title}</h2>
    </section>
    </>
  )
}

export default PageTitle