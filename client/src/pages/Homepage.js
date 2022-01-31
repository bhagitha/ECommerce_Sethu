import React, { useContext } from 'react';
import Topbar from '../components/Topbar';
import Carouselpart from '../components/Carouselpart';
import Navitems from '../components/Navitems';
import Products from '../components/Products';
import { LoginContext } from '../Context/LoginContext';
function  Homepage() {
    const{Username}=useContext(LoginContext)
    return (
        <div>
            <Topbar />
           <Carouselpart/>
           <Navitems/>
            <Products />
             {Username}        
                      
        </div>
    )

}

export default Homepage;
