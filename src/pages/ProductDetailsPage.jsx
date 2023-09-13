import React, { Fragment, useEffect,  } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import ProductDetails from '../components/productDetails/ProductDetails'
import SuggestedProduct from '../components/productDetails/SuggestedProduct'

const ProductDetailsPage = () =>{
    useEffect(() => {
        // Code à exécuter lorsque le composant est monté (équivalent à componentDidMount)
        window.scroll(0, 0);
      }, []); // Le tableau vide signifie que cet effet ne dépend d'aucune valeur et s'exécute une seule fois, équivalent à componentDidMount

    return (
        <Fragment>
            <div className='Desktop'>
                <NavMenuDesktop />
            </div>

            <div className='Mobile'>
                <NavMenuMobile />
            </div>

            <ProductDetails />
            <SuggestedProduct />

            <div className='Desktop'>
                <FooterDesktop />
            </div>

            <div className='Mobile'>
                <FooterMobile />
            </div>

        </Fragment>
    )
}

export default ProductDetailsPage