import React from 'react'
import './Hem.css'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export function Hem() {
    const navigate = useNavigate()

    return (
        <div className="front-page">
            <div className="front-page-blurb">
                <h2>Välkommen till 150G!</h2>
                <p>Hisingens bästa burgare står framför dörren -- kom in och se!</p>
                <ul>
                    <li>Öppettider:</li>
                    <li>Måndag-Torsdag: 11-21</li>
                    <li>Fredag: 11-22</li>
                    <li>Lördag: 12-22</li>
                    <li>Söndag: 12-21</li>
                </ul>
                <div className="blurb-button-container">
                    <button onClick={() => navigate('/meny')}>Se vår meny</button>
                    {/* <a className="button-link" href="https://www.foodora.se/restaurant/ykxd/150g-burgers" target="_blank">Beställ från Foodora</a> */}
                    <button><a href="https://www.foodora.se/restaurant/ykxd/150g-burgers" target="_blank">Beställ från Foodora</a></button>                
                </div>
            </div>
            <div className="front-page-teasers">
                <div className="front-page-box-rounded-left">
                    <h4>Burgarhungrig?</h4>
                    <button className="teaser-button"><HashLink smooth to="/meny#burgare">VÅRA BURGARE</HashLink></button>
                </div>
                <div className="front-page-image-burger">
                </div>
                <div className="front-page-image-pizza">
                </div>
                <div className="front-page-box-rounded-right">
                    <h4>Pizzasugen?</h4>
                    <button className="teaser-button"><HashLink smooth to="/meny#pizzor">VÅRA PIZZOR</HashLink></button>
                </div>
            </div>
        </div>
    )
}