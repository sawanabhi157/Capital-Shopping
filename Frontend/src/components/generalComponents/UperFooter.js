import React from 'react'
import { FaMoneyCheckAlt, FaShippingFast, FaExpeditedssl, FaClock } from "react-icons/fa";
import './UperFooter.css'
function UperFooter() {
    const styleIconsFooter = { fontSize: "2.3em", marginLeft: "40px", }
    return (
        <div className='footer-uper'>
            <div className="child-footer-uper">
                <div className="com1">
                    <FaShippingFast style={styleIconsFooter} />
                    <p className='com1-p1'>Fast & Free Delivery</p>
                    <p className='com1-p2'> Free Delivery on all Orders</p>
                </div>
                <div className="com2">
                    <FaExpeditedssl style={styleIconsFooter} />

                    <p className='com1-p1'>Secure Payment</p>
                    <p className='com1-p2'> Free Delivery on all Orders</p>
                </div>
                <div className="com3">
                    <FaMoneyCheckAlt style={styleIconsFooter} />
                    <p className='com1-p1'>Money Back Gurantee</p>
                    <p className='com1-p2'> Free Delivery on all Orders</p>
                </div>
                <div className="com4">
                    <FaClock style={styleIconsFooter} />
                    <p className='com1-p1'>Online Support</p>
                    <p className='com1-p2'> Free Delivery on all Orders</p>
                </div>
            </div>

        </div>
    )
}

export default UperFooter