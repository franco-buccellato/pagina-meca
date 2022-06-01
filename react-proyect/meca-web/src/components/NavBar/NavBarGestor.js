import './NavBar.css';
/* import { useParams } from 'react-router-dom'; */
import NavBarDesk from './NavBarDesk';
import NavBarMobile from './NavBarMobile';
/* import { useEffect, useState } from 'react'; */

function NavBarGestor() {

    let screenWidth = document.documentElement.scrollWidth;

    if(screenWidth > 800) {
        return <NavBarDesk estaEnSupPage={'SI'}/>
    } else {
        return <NavBarMobile/>
    }
}

export default NavBarGestor;