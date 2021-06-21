import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehIFzCMRIfxW11Ufz2mLo-zXYS391ZIIqvQ&usqp=CAU" alt="logo"/></Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                             <BsFillBagFill className="cart-icon" />
    <span>{totalQuantities}</span>
                            </div>
                            
                        </Link>
                        <div>
                            <h3>Shopping-Cart</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
