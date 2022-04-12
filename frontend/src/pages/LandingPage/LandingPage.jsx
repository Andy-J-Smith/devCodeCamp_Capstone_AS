import React from 'react'
import './LandingPage.css'
import Product from '../../components/Product/Product'
import Survey from '../../components/Survey/Survey'

const LandingPage = (props) => {
  return (
    <div>
      <Survey/>
<h1 className='landing'>Choose your favorite package</h1>
        <Product/>
    </div>
  )
}

export default LandingPage