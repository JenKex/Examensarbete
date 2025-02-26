import React from 'react'
import './OmOss.css'
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa6'

export function OmOss() {
    return (
        <div className="about-us-page">
            <div className="restaurant-image-blurb" role="img" alt="En bild av 150G Burgers, en burgarrestaurang under en solig dag. Folk äter på uteserveringen och dörren är öppen. Inuti finns bord, stolar och restaurangens kök med kryddor och burgaringredienser vid disken.">
                {/* <img className="restaurant-image" src="https://www.mitti.se/image-3.257534.143419.20231004122147.17a1c18f46?size=512"></img> */}
                <div className="about-us-blurb">
                    <p>Med ett smarrigt utbud av burgare, surdegspizzor, och kryddiga sides har vi serverat gott käk och god stämning i år och dar.</p>
                    <h2>Vill du veta mer? Eller bara säga hur gott det var? Följ oss på:</h2>
                    <div className="social-media-container">
                    <a href="https://www.instagram.com/150gburgers/?hl=en"><FaInstagram/></a>
                    <a href="https://www.tiktok.com/@150gburgers"><FaTiktok/></a>
                    <a href="https://www.facebook.com/150gburgers/?locale=sv_SE"><FaFacebookF/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}