import React from 'react'
import './Meny.css'
import { FaBurger } from 'react-icons/fa6'

// Potential option: Admin-function that renders out every burger in a JSON-list, .mapping out from that and letting the admin change individual items?

export function Meny(){
    return(
        <div className="menu-page">
            <div className="menu-page-offer">
                <h1 className="highlight">LUNCHERBJUDANDE 11-14</h1>
                <p>Valfri burgare, dricka och pommes</p>
                <h2>159:-</h2>
            </div>
            <div className="menu-grouping">
                <div className="menu-grouping-start">
                <FaBurger className="menu-icon"/>
                <h1 className="menu-grouping-headline highlight">BURGARE</h1>
                </div>
                <h1>Cheeseburger 129:-</h1>
                <p>Classic mayo, ketchup, senap, tomat, pickles, gullök och cheddar</p>
                <h1>Spicy truffle 139:-</h1>
                <p>Tryffelmajo, karameliserad lök, emmendalerost och Pepper Jack cheese</p> 
            </div>
        </div>
    )
}