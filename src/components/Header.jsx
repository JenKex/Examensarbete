import { Link, useNavigate } from "react-router-dom"

// const navigate = useNavigate()

export function Header() {
    return (
        <nav className="header-nav">
            {/* Make this an image asset; import logo */}
            <Link to="/">
                BnP
            </Link>
            <div className="header-options">
                <Link to="/meny">
                    Meny
                </Link>
                <Link className="test" to="/hitta-hit">
                    Hitta hit
                </Link>
                <Link to="/om-oss">
                    Om oss
                </Link>
            </div>
        </nav>
    )
}