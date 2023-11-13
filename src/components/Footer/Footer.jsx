// import sms from "/im";
// import react from "react"
// import rhythm from "src/components/images/rhythm";
import "./footer.css"

export default function Footer () {
    return (

        <footer>
            <div className="footerContainer">
                <div className="col1">
                    <div className="col1-flex">
                    <img className="butterfly" src="src/images/Butterfly.png" alt="" />
                    <p className="rhythm">Rhythm</p>
                    </div>
                    <div className="col1-flex">
                    <img className="col1-logo" src="src/images/sms.png" alt="" />
                    <p className="pcol1">Enquiry@Rhythm.com</p>
                    </div>
                    <div className="col1-flex">
                    <img className="col1-logo" src="src/images/location.png" alt="" />
                    <p className="pcol1">San Francisco</p>
                    </div>
                </div>
                <div className="col2">
                    <h4>Pages</h4>
                    <a className="footerLink" href="">Store</a>
                    <a className="footerLink" href="">Collections</a>
                    <a className="footerLink" href="">Support</a>
                </div>
                <div className="col3">
                    <h4>Product</h4>
                    <a className="footerLink" href="">Terms</a>
                    <a className="footerLink" href="">Privacy Policy</a>
                    <a className="footerLink" href="">Copyright</a>
                </div>
                <div className="col4">
                    <h4>Follow us</h4>
                    <img className="logo" src="src/images/Facebook.svg" alt="" />
                    <img className="logo" src="src/images/Twitter.png" alt="" />
                    <img className="logo" src="src/images/Instagram.svg" alt="" />
                </div>
               
            </div>
            <div className="copyrights"><p>2023 Copyrights by Björn, Pia, Lukas and Maziar</p></div>


        
        </footer>


    )
}