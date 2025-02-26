import React from 'react'
import './Meny.css'
import { FaBurger, FaPizzaSlice } from 'react-icons/fa6'
import { CiFries } from 'react-icons/ci'
import { MenuItem } from '../components/MenuItem.jsx'

// Potential option: Admin-function that renders out every burger in a JSON-list, .mapping out from that and letting the admin change individual items?

export function Meny() {
    return (
        <div className="menu-page">
            <div className="menu-page-offer">
                <h1 className="highlight">LUNCHERBJUDANDE 11-14</h1>
                <p>Valfri burgare, dricka och pommes</p>
                <h2>159:-</h2>
            </div>
            <div className="menu-grouping">
                <div className="menu-grouping-start-burgers">
                    <FaBurger className="menu-icon" id="burgers" />
                    <h1 className="menu-grouping-headline highlight">BURGARE</h1>
                    <MenuItem props={{ name: "Cheeseburger", price: "129:-", ingredients: "Classic mayo, ketchup, senap, tomat, pickles, gullök och cheddar" }} />
                    <MenuItem props={{ name: "Spicy truffle", price: "139:-", ingredients: "Tryffelmajo, karameliserad lök, emmendalerost och Pepper Jack cheese" }} />
                </div>
                <div className="menu-grouping-start-fries">
                    <CiFries className="menu-icon" id="sides" />
                    <h1 className="menu-grouping-headline highlight">SIDES</h1>
                    <MenuItem props={{ name: "Placeholder", price: "119:-", ingredients: "Placeholder" }} />
                        <MenuItem props={{ name: "Placeholder", price: "119:-", ingredients: "Placeholder" }} />
                        <MenuItem props={{ name: "Placeholder", price: "119:-", ingredients: "Placeholder" }} />
                </div>
            </div>
            <div className="menu-grouping-pizzas">
                <div className="menu-grouping-start">
                    <FaPizzaSlice className="menu-icon" id="pizzas" />
                    <h1 className="menu-grouping-headline highlight">PIZZOR</h1>
                    <div className="menu-pizzas">
                        <MenuItem props={{ name: "Placeholder", price: "119:-", ingredients: "Placeholder" }} />
                        <MenuItem props={{ name: "Placeholder", price: "119:-", ingredients: "Placeholder" }} />
                        <MenuItem props={{ name: "Placeholder", price: "119:-", ingredients: "Placeholder" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}