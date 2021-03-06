import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const MyFooterNav = () => {
    return (
        <>
        <div className="brand">
            <h1>Anypay</h1>
            <h3>2972 Westheimer Rd. Santa Ana, Illinois 85486</h3>
            <div className="social-accounts">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
             </div>
             <div className="page-navigate">
                 <h1>Pages</h1>
                 <h3>Home</h3>
                 <h3>Shop</h3>
                 <h3>Buy Airtime</h3>
                 <h3>Contact</h3>
             </div>
             <div className="Newsletter">
                 <h1>Newsletter</h1>
                 <p>Get more information about AnyPay and More Updates</p>
                 <label htmlFor="email">
                     <input type="email"/>
                     <span><button className="btn">Subscribe</button></span>
                 </label>
             </div>
        </>
    )
}

export default MyFooterNav