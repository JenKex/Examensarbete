import React from 'react'
import './Meny.css'
import { FaBurger, FaPizzaSlice } from 'react-icons/fa6'
import { CiFries } from 'react-icons/ci'
import { GiSandwich, GiDonerKebab } from 'react-icons/gi'
import { MenuItem } from '../components/MenuItem.jsx'

// Potential option: Admin-function that renders out every burger in a JSON-list, .mapping out from that and letting the admin change individual items?

export function Meny() {

    // Potential option to fix React not working with hash-links -- check router, and if it matches #pizzor or #burgare, run a function to scrollIntoView() to that section

    return (
        <div className="menu-page">
            <div className="menu-page-offer">
                <h1 className="highlight">LUNCHERBJUDANDE 11-14</h1>
                {/* <div className="offer-container"> */}
                    <p>Valfri burgare</p>
                    <h2>119:-</h2>
                {/* </div> */}
                {/* <div className="offer-container"> */}
                    <p>Valfri burgare, dricka och pommes</p>
                    <h2>129:-</h2>
                {/* </div> */}
            </div>
            <div className="menu-grouping">
                <div className="menu-grouping-start-burgers">
                    <FaBurger className="menu-icon" id="burgare" />
                    <h1 className="menu-grouping-headline highlight">BURGARE</h1>
                    <MenuItem props={{ name: "Cheeseburger", price: "119:-", ingredients: "Classic mayo, ketchup, senap, tomat, pickles, gullök och cheddar" }} />
                    <MenuItem props={{ name: "300G", price: "134:-", ingredients: "300g kött, classic majo, ketchup, senap, tomat, gullök, pickles & cheddar" }} />
                    <MenuItem props={{ name: "Crispy Chicken", price: "119:-", ingredients: "Habaneromajonnäs, pickles, tomat, picklad rödlök, cheddar" }} />
                    <MenuItem props={{ name: "Spicy truffle", price: "124:-", ingredients: "Tryffelmajo, karamelliserad lök, emmendalerost och Pepper Jack-ost" }} />
                    <MenuItem props={{ name: "Spicy one", price: "124:-", ingredients: "Habaneromajo, sallad, karamelliserad lök, jalapeños, picklad rödlök, cheddar och Pepper Jack-ost" }} />
                    <MenuItem props={{ name: "BBQ Special", price: "124:-", ingredients: "BBQ-majonnäs, sallad, stekt lök, jalapeños, BBQ-sås, rostad lök och cheddar" }} />
                    <MenuItem props={{ name: "The House", price: "134:-", ingredients: "BBQ-majonnäs, sallad, lökringar, karamelliserad lök, jalapeños och tre ostar" }} />
                    <MenuItem props={{ name: "Bacon Burger", price: "134:-", ingredients: "Classic majo, sallad, tomat, rödlök, cheddar och bacon" }} />
                    <MenuItem props={{ name: "Halloumi", price: "119:-", ingredients: "Tryffelmajonnäs, sallad, avokado, jalapeños, karamelliserad lök", isVegetarian: true }} />
                    <MenuItem props={{ name: "Veggie Dream", price: "119:-", ingredients: "Tryffelmajonnäs, sallad, avokado, jalapeños, karamelliserad lök", isVegetarian: true }} />
                </div>
                <div className="menu-grouping-start-fries">
                    <CiFries className="menu-icon" id="sides" />
                    <h1 className="menu-grouping-headline highlight">SIDES</h1>
                    <MenuItem props={{ name: "Lökringar", price: "35:-", ingredients: "Friterade lökringar, 8 st" }} />
                    <MenuItem props={{ name: "Chili Cheese Nuggets", price: "35:-", ingredients: "Djupfriterad chili cheese, 6 st" }} />
                    <MenuItem props={{ name: "Fries", price: "35:-", ingredients: "Ingen burgare utan fries!" }} />
                    <MenuItem props={{ name: "Sötpotatis-fries", price: "45:-", ingredients: "En sötpotatis-spinn på en klassiker" }} />
                    <MenuItem props={{ name: "Cheese fries", price: "45:-", ingredients: "Pommes frites med ett lager av cheddar, majo, och karamelliserad lök" }} />
                    <MenuItem props={{ name: "Special fries", price: "45:-", ingredients: "Pommes frites serverat med habaneromajo, cheddar och picklad rödlök" }} />
                    <MenuItem props={{ name: "Chicken nuggets", price: "35:-", ingredients: "Krispiga chicken nuggets, 6 st" }} />
                    <MenuItem props={{ name: "Side City", price: "99:-", ingredients: "Välj fyra sides och två dippsåser. I varje side ingår fyra bitar. Gäller ej cheese fries eller special fries." }} />
                </div>
            </div>
            <div className="menu-grouping-pizzas">
                <div className="menu-grouping-start">
                    <FaPizzaSlice className="menu-icon" id="pizzor" />
                    <h1 className="menu-grouping-headline highlight">SURDEGSPIZZOR</h1>
                    <div className="menu-pizzas">
                        <MenuItem props={{ name: "Margherita", price: "109:-", ingredients: "Tomatsås och ost" }} />
                        <MenuItem props={{ name: "Kebabpizza", price: "125:-", ingredients: "Kebabkött på nöt, sallad och valfri sås" }} />
                        <MenuItem props={{ name: "Kycklingpizza", price: "125:-", ingredients: "Kycklingkebab, sallad och valfri sås" }} />
                        <MenuItem props={{ name: "Oxfilépizza", price: "135:-", ingredients: "Vinmarinerad oxfilé, champinjoner, rödlök, paprika och bearnaisesås" }} />
                        <MenuItem props={{ name: "Vegetala", price: "135:-", ingredients: "Champinjoner, paprika, rödlök och valfri sås", isVegetarian: true }} />
                    </div>
                </div>
            </div>
            <div className="menu-grouping-dips">
                <div className="menu-grouping-start">
                    <h1 className="menu-grouping-headline highlight">DIPP 10:-</h1>
                    <div className="menu-dips">
                        <MenuItem props={{ name: "Klassisk majo" }} />
                        <MenuItem props={{ name: "Habanero-majo" }} />
                        <MenuItem props={{ name: "Tryffelmajo" }} />
                        <MenuItem props={{ name: "BBQ-majo" }} />
                        <MenuItem props={{ name: "Cheddar" }} />
                        <MenuItem props={{ name: "Spicy cheddar" }} />
                        <MenuItem props={{ name: "Vitlök" }} />
                        <MenuItem props={{ name: "BBQ-sås" }} />
                    </div>
                </div>
            </div>
            <div className="menu-grouping-specialties">
                <div className="menu-grouping-start">
                    <h1 className="menu-grouping-headline highlight">SPECIALITETER</h1>
                    <div className="menu-specialties">
                        <MenuItem props={{ name: "Philly cheese steak", price: "150:-", ingredients: "150g oxfilé, paprika, lök och smält cheddarost" }} />
                        <MenuItem props={{ name: "Kebabtallrik", price: "119:-", ingredients: "Pommes, sallad och valfri sås. Välj mellan kebabkött och kycklingkebab." }} />
                    </div>
                </div>
            </div>
        </div>
    )
}