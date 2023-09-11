import React, { Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTobMobile from '../components/home/HomeTobMobile'

function HomePage() {
  return (
    <Fragment>
        <div className='Desktop'>
            <NavMenuDesktop/> 
            <HomeTop/> 
        </div>

        <div className='Mobile'>
            <NavMenuMobile/>
            <HomeTobMobile/>
        </div>

  
      <FeaturedProducts />
      <NewArrival />
      <Categories />
      <Collection />
      
    </Fragment>
  )
}

export default HomePage