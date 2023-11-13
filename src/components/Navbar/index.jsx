import "./navbar.css"

export default function Navbar() {

    return(
        <nav className="navbar">
            <div className="logo-container">
                <img src="src/assets/Butterfly.png" alt="" />
                <p >Rhythm</p>
            </div>
            <ul className="navlist-container">
                <li>Store</li>
                <li>Collections</li>
                <li>Support</li>
            </ul>
        </nav>
    )
}