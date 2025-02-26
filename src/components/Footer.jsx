import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa6'

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-column">Följ oss på:
                <div className="footer-social-media">
                    <a href="https://www.instagram.com/150gburgers/?hl=en"><FaInstagram/></a>
                    <a href="https://www.tiktok.com/@150gburgers"><FaTiktok/></a>
                    <a href="https://www.facebook.com/150gburgers/?locale=sv_SE"><FaFacebookF/></a>
                </div>
            </div>
            <ul className="opening-hours">
                <li>Öppettider:</li>
                <li>M-T: 11-21</li>
                <li>F: 11-22</li>
                <li>L: 12-22</li>
                <li>S: 12-21</li>
            </ul>
        </div>
    )
}