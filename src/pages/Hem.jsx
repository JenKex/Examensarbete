import React from 'react'
import './Hem.css'

export function Hem() {
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
                <button>Se vår meny</button>
                <button>Beställ från Foodora</button>
            </div>
            <div className="front-page-teasers">
                    <div className="front-page-box-rounded-left">
                        <h4>Burgarhungrig?</h4>
                        <p>→</p>
                        <button>VÅRA BURGARE</button>
                    </div>
                    <div className="front-page-image-burger">
                    </div>
                    <div className="front-page-image-pizza">
                    </div>
                    <div className="front-page-box-rounded-right">
                        <h4>Pizzasugen?</h4>
                        <p>←</p>
                        <button>VÅRA PIZZOR</button>
                    </div>
            </div>
        </div>
    )
}