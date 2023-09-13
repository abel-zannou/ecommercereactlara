import React, { Fragment, useEffect,  } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTobMobile from '../components/home/HomeTobMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'

function HomePage() {

  useEffect(() => {
    // Code à exécuter lorsque le composant est monté (équivalent à componentDidMount)
    window.scroll(0, 0);
  }, []); // Le tableau vide signifie que cet effet ne dépend d'aucune valeur et s'exécute une seule fois, équivalent à componentDidMount


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

      
      <div className='Desktop'>
        <FooterDesktop/>
      </div>

      <div className='Mobile'>
        <FooterMobile/>
      </div>

    </Fragment>
  )
}

export default HomePage