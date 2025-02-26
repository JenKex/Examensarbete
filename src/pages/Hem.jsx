import React from 'react'
import './Hem.css'
import { useNavigate } from 'react-router-dom'

export function Hem() {
    const navigate = useNavigate()

    return (
        <div className="front-page">
            <div className="front-page-blurb">
                <h2>Välkommen till BnP!</h2>
                <ul>
                    <li>Öppettider:</li>
                    <li>Måndag-Torsdag: 11-21</li>
                    <li>Fredag: 11-22</li>
                    <li>Lördag: 12-22</li>
                    <li>Söndag: 12-21</li>
                </ul>
                <div className="blurb-button-container">
                <button onClick={() => navigate('/meny')}>Se vår meny</button>
                {/* Styla externa a-linkar att likna och bete sig som buttons */}
                <button><a href="https://www.foodora.se/restaurant/ykxd/150g-burgers">Beställ från Foodora</a></button>
                </div>
            </div>
            <div className="front-page-teasers">
                    <div className="front-page-box-rounded-left">
                        <h4>Burgarhungrig?</h4>
                        <p>→</p>
                        <button onClick={() => navigate('/meny#burgers')}>VÅRA BURGARE</button>
                    </div>
                    <div className="front-page-image-burger">
                    </div>
                    <div className="front-page-image-pizza">
                    </div>
                    <div className="front-page-box-rounded-right">
                        <h4>Pizzasugen?</h4>
                        <p>←</p>
                        <button onClick={() => navigate('/meny#pizzas')}>VÅRA PIZZOR</button>
                    </div>
            </div>
        </div>
    )
}