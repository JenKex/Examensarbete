import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa6'

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-column">Följ oss på:
                <div className="footer-social-media">
                    <div><FaInstagram/></div>
                    <div><FaTiktok/></div>
                    <div><FaFacebookF/></div>
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