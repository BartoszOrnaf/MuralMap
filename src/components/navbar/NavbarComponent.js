import React from 'react';
import logoLodz from './navbar-assets/Logo-Lodz-small.png'
import './NavbarComponent.scss'
class NavbarComponent extends React.Component {

    render(){
        return (
            <div id="navbar">
                <img alt = "logo" src= {logoLodz} id="logo-top"></img>
                <span>Lódzki Mural</span> 
            </div>
        )
    }
      
}

export default NavbarComponent;