import Navbar from "../Navbar";

//IMPORTING CSS FILE
import "./header.css"


export default function Header() {

    return(
    <>
        <div className="header-image">
            <div>
                <Navbar/>
                <div className="header-content">
                <h1>Browse top quality <span className="primary_color">Guitars</span> online</h1>
                <p>Explore 50k+ latest collections of branded guitars online with Rhythm.</p>
                <div className="button-container">
                    <button className="primary_button">Get the App</button>
                    <img src="src/assets/android_small.png" alt="" />
                    <img src="src/assets/Apple _small.png" alt="" />
                </div>
            </div>
        </div>
            <div className="background-image">
                <img src="src/assets/header_image.png" alt="" />
                <img src="src/assets/logo_circle.png" alt="" className="logo-circle"/>
            </div>

        </div>


        
    </>
    )
}