import React, {useReducer} from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import CartContext from "../../context/CartContext";
import CartReducer from '../../reducers/Cart';

const Layout = () => {
    let carts = JSON.parse(localStorage.getItem('carts'));
    const [state,dispatch] = useReducer(CartReducer,{
        carts: carts
    })
    return(
        <CartContext.Provider
        value={{
            carts : state.carts,
            dispatchCart : dispatch
        }}
        >
            <div>
                <Header />
                    <main>
                        <Outlet />
                    </main>
                <Footer />
            </div>
        </CartContext.Provider>
    )
}

export default Layout