import React,{useState,useEffect} from 'react'
import './Quick.css'
import Quickdisplay from "./Quickdisplay"

const Base_url="https://messhourl.onrender.com" 


const Quick = ()=>{

    const [quick,setquick] = useState()

    useEffect(()=>{
        
        fetch(`${Base_url}/category`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setquick(data)
        })
    },[])
 
    return(
        <>
            <hr/>
            <div id="tittle">
                <img src="m.avif" className="mainlogo" alt="m"/>
                <span id="messho">MESSHO</span>
                <p className="sign" onClick="signin()">Sign-in</p>
                <a href="listingpages/subscription.html"><p className="sign">Subscription</p></a>
                <div className="location">
                    <span id="out"></span>
                    <span id="weather"></span>
                    <div  id="weather-icon">
                        <img src="icons/unknown.png"  alt="icon" className="wicon"/>
                    </div>
                </div>
            </div>
            <div className="bar"></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="offer 1.jpg" className="d-block  offer" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="offer2.jpg" className="d-block  offer" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="offer3.jpg" className="d-block  offer" alt="..."/>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="bar"></div>
                {<Quickdisplay  Quicksearch={quick}/>}
            <div id="options">
                <div className="payment">
                    <div className="option"><img src="e-wallet.jpg" alt="wallet" className="paying"/><div>Wallet</div></div>
                    <div className="option"><img src="sendmoney.png" alt="sendmoney" className="paying"/><div>Send Money</div></div>
                    <div className="option"><img src="paybill1.jpg" alt="paybill" className="paying"/><div>Pay Bills</div></div>
                    <div className="option"><img src="scan and pay1.jpg" alt="scanandpay" className="paying"/><div>Scan any QR</div></div>
                </div>
                <div className="payment">
                    <span id="deals">Deals of the Day</span>
                    <div ><img src="off.png" alt="off" id="off"/></div>
                    <div><img src="iron.png" alt="iron" className="deal"/></div>
                    <div><img src="travelling bag.webp" alt="travelingbag" className="deal"/></div>
                    <div><img src="schoolbag.webp" alt="schoolbag" className="deal"/></div>
                    <div><img src="utensils.webp" alt="utensil" className="deal"/></div>
                </div>
                <div className="payment">
                    <p className="deal1">Electronic deal</p>
                    <div><img src="tv.jpg" alt="tv" className="deal"/></div>
                    <div><img src="laptop.jpg" alt="tv" className="deal"/></div>
                    <div><img src="refrigirator.avif" alt="tv" className="deal"/></div>
                    <div><img src="mobile.jpg" alt="tv" className="deal"/></div>
                </div>
                <div className="payment">
                    <p className="deal1">Play Games to Win Offers</p>
                    <div><img src="spin.avif" alt="spin"  className="deal"/></div>
                    <div><img src="shoot.jpg" alt="spin"  className="deal"/></div>
                    <div><img src="jackpot.jpeg" alt="spin"  className="deal"/></div>
                </div>
            </div>
            <div className="frequentsell">
                <p className="deal1">Summer appliances from local stores</p>
                <div className="frequent">
                    <div className="subfrequent">
                        <img src="ac.jpg" alt="ac" className="subfrequent"/>
                    </div>
                    <span>AC</span>
                </div>
                <div className="frequent">
                    <div className="subfrequent">
                        <img src="fan.jpg" alt="fan" className="subfrequent"/>
                    </div>
                    <span>Fan</span>
                </div>
                <div className="frequent">
                    <div className="subfrequent">
                        <img src="washingmachine.png" alt="machine" className="subfrequent"/>
                    </div>
                    <span>Washing Machine</span>
                </div>
                <div className="frequent">
                    <div className="subfrequent">
                        <img src="cooler.avif" alt="cooler" className="subfrequent"/>
                    </div>
                    <span>Cooler</span>
                </div>
                <span className="more">See More</span>
            </div>
            <div className="frequentsell">
                <p className="deal1">Under ₹499  | Pocket friendly fashion</p>
                <div className="frequent">
                    <div className="subfrequent">
                        <img src="clothes.jpg" alt="clothes" className="subfrequent"/>
                    </div>
                    <span>Clothing</span>
                </div>
                <div className="frequent">
                    <div className="subfrequent">
                        <img src="backpacks.jpg" alt="backpacks" className="subfrequent"/>
                    </div>
                    <span>Backpacks</span>
                </div>
                <div className="frequent">
                    <div className="subfrequent">
                        <img src="footwear.jpg" alt="footwear" className="subfrequent"/>
                    </div>
                    <span>Footwears</span>
                </div>
                <div className="frequent">
                    <div className="subfrequent">
                        <img src="beachwear.jpg" alt="wears" className="subfrequent"/>
                    </div>
                </div>
                <span className="more">See More</span>
            </div>
            <div className="frequentsell">
                <p className="deal1">Upto 60% 0ff | Tools and home improvements</p>
                <div className="frequent sell">
                    <div className="subfrequent">
                        <img src="toolkit.jpg" alt="drilling machine" className="subfrequent"/>
                    </div>
                    <span>Drilling Machines and More</span>
                </div>
                <div className="frequent sell">
                    <div className="subfrequent">
                        <img src="mops.jpg" alt="mops" className="subfrequent"/>
                    </div>
                    <span>Spin mops and More</span>
                </div>
                <div className="frequent sell">
                    <div className="subfrequent">
                        <img src="bathroom.jpg" alt="bath accessories" className="subfrequent"/>
                    </div>
                    <span>Bathroom Accessories</span>
                </div>
                <div className="frequent  sell">
                    <div className="subfrequent">
                        <img src="extension box.webp" alt="wire" className="subfrequent"/>
                    </div>
                    <span>Extension boards and plugs</span>
                </div>
                <span className="more">See More</span>
            </div>
                <div className="travel">
                    <p className="deal1">Starting ₹79 | Messho Brands and More </p>
                    <div className="brands">
                        <div className="subbrand">
                            <img src="chooper.jpg" alt="chooper" className="subbrand"/>
                        </div>
                        <p>chopper & more</p>
                    </div>
                    <div className="brands">
                        <div className="subbrand">
                            <img src="stringlights.jpg" alt="string ligts" className="subbrand"/>
                        </div>
                        <p>String lights & more</p>
                    </div>
                    <div className="brands">
                        <div className="subbrand">
                            <img src="jars.jpg" alt="jar" className="subbrand"/>
                        </div>
                        <p>Jar, container & more</p>
                    </div>
                    <div className="brands">
                        <div className="subbrand">
                            <img src="wall sticker.jpg" alt="sticker" className="subbrand"/>
                        </div>
                        <p>Wall stickers</p>
                    </div>
                    <span className="seemore">See More</span>
                </div>
                <div className="travel">
                    <p className="deal1">Book Travel Ticket</p>
                    <div className="brands">
                        <div className="subbrand">
                            <img src="areoplane.jpg" alt="aeroplane" className="subbrand"/>
                        </div>
                        <p>Get upto 10% off on flights ticket</p>
                    </div>
                    <div className="brands">
                        <div className="subbrand">
                            <img src="bus.jpg" alt="bus" className="subbrand"/>
                        </div>
                        <p>Guaranteed rewards on bus ticket</p>
                    </div>
                    <div className="brands">
                        <div className="subbrand">
                            <img src="train.jpg" alt="train" className="subbrand"/>
                        </div>
                        <p>Zero gateway fees on trains</p>
                    </div>
                    <div className="brands">
                        <div className="subbrand">
                            <img src="travelling.jpg" alt="travelling  products" className="subbrand"/>
                        </div>
                        <p>Products need for travel</p>
                    </div>
                    <span className="seemore">See More</span>
                </div>
            <div id="womenfashion">
                <p id="text">Festival wear from small businesses</p>
                <div className="fashion">
                    <img src="sari.jpg" alt="sari" className="fashion"/>
                </div>
                <div className="fashion">
                    <img src="sari1.jpg" alt="sari" className="fashion"/>
                </div>
                <div className="fashion">
                    <img src="sari2.jpg" alt="sari" className="fashion"/>
                </div>
                <div className="fashion">
                    <img src="sarri3.jpg" alt="sari" className="fashion"/>
                </div>
                <div className="fashion">
                    <img src="sari4.jpg" alt="sari" className="fashion"/>
                </div>
                <div className="fashion">
                    <img src="sari5.jpg" alt="sari" className="fashion"/>
                </div>
                <div className="fashion">
                    <img src="sari6.jpg" alt="sari" className="fashion"/>
                </div>
                <div className="fashion">
                    <img src="sari7.jpg" alt="sari" className="fashion"/>
                </div>
            </div>
            <div className="container">
                <div id="seller">
                    <span className="tittle">Register as a Meesho Supplier</span>
                    <p className="subtittle">Sell your products to crores of customers at 0% commission</p>
                    <div className="text"><span class="subtext">100% Profit</span></div>
                    <div className="text"><span class="subtext">Sell All Over INDIA</span></div>
                    <div className="text"><span class="subtext">Grow your Business 10x</span></div>
                </div>
            </div>
        </>
    )
}
export default Quick;