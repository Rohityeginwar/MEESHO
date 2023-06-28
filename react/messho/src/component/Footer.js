import React from 'react';
import './Footer.css'
import './Header.css'
const Footer = ()=>{

    // window.onload = uploadCoupon()

    // function uploadCoupon() {
    //     document.getElementById('coupon').style.visibility= 'visible';
    //     document.getElementById('main').style.opacity='0.7';
    // }
    // function closecoupon() {
    //     document.getElementById('coupon').style.visibility= 'hidden';
    //     document.getElementById('main').style.opacity = '1';
    // }
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
                            <img src="/image/fb.png" alt="fb" className="footimg"/>
                            <img src="/image/insta.png" alt="insta" className="footimg"/>
                            <img src="/image/tweet.png" alt="tweet" className="footimg"/>
                        </div>
                    </div>
                </div>
                <div id="rights">
                    <span>&copy;meesho. All Right Reserved.</span>
                </div>
                <div id="pay">
                    <img src="/image/visa.png" alt="visa" className="credit"/>
                    <img src="/image/Mastercard.png" alt="mastercard" className="credit"/>
                    <img src="/image/phonepe.png" alt="phonepe" className="credit"/>
                    <img src="/image/paypal.png" alt="paypal" className="credit"/>
                    <img src="/image/upi.png" alt="upi" className="credit"/>
                </div>
            </footer>    
            <div id="coupon">
            <button onClick={"closecoupon"}>&times;</button>
            <img src="paylater.jpg" alt="pay" className="coupon"/>
        </div>   
        </>
    )
}

export default Footer