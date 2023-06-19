import React from 'react';
import './Footer.css'
const Footer = ()=>{
    return(
        <>
            <footer>
                <div>
                    <div className="foot">
                        <div className="footheading"> customer care</div>
                        <div>Contact Us</div>
                        <div>FAQs</div>
                        <div>Return & Exchange</div>
                        <div>Shipping & Handling</div>
                        <div>Damaged or Defected</div>
                        <div>Items</div>
                        <div>cancelling or Changing</div>
                        <div>an order</div>
                        <div>Terms of services</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div className="foot">
                        <div className="footheading">Inside Grace Eleyae</div>
                        <div>About US</div>
                        <div>GE Magazine</div>
                        <div>Why Satin</div>
                        <div>Contact Us</div>
                        <div>Wholesale</div>
                        <div>careers</div>
                    </div>
                    <div className="foot">
                        <div className="footheading">My Account</div>
                        <div>Sign in/Register</div>
                        <div>My Wishlist</div>
                        <div>My Cart</div>
                    </div>
                    <div className="foot">
                        <div className="footheading">Sign up/Buy prime & get 10% off your first order</div>
                        <input id="footemail" placeholder="@email"/>
                        <div id="prime">
                            Subscription
                        </div>
                        <div>
                            <img src="fb.png" alt="fb" className="footimg"/>
                            <img src="insta.png" alt="insta" className="footimg"/>
                            <img src="tweet.png" alt="tweet" className="footimg"/>
                        </div>
                    </div>
                </div>
                <div id="rights">
                    <span>&copy;meesho. All Right Reserved.</span>
                </div>
                <div id="pay">
                    <img src="visa.png" alt="visa" className="credit"/>
                    <img src="Mastercard.png" alt="mastercard" className="credit"/>
                    <img src="phonepe.png" alt="phonepe" className="credit"/>
                    <img src="paypal.png" alt="paypal" className="credit"/>
                    <img src="upi.png" alt="upi" className="credit"/>
                </div>
            </footer>       
        </>
    )
}

export default Footer;