import React from 'react'
import './LandingPage.css'
import Product from '../../components/Product/Product'

const LandingPage = (props) => {
  return (
    <div>
<h1 className='landing'>Choose your favorite package</h1>
        <Product/>
    </div>
  )
}

export default LandingPage