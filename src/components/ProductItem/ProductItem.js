import React, { useContext,useEffect,useRef } from 'react';
import Button from '../Button/Button';
import Image from '../Image/Image';
import ThemeContext from '../../context/ThemeContext';
import { MdOutlineAddShoppingCart ,MdRemoveShoppingCart  } from "react-icons/md";
import CartContext from '../../context/CartContext';
import './ProductItem.css';
import {Link} from 'react-router-dom';
import { PROJECT_URL } from '../../configs/general';

const ProductItem = ({data}) => {
    const themeValue = useContext(ThemeContext);
    const {carts,dispatchCart} = useContext(CartContext)
    const added = carts.includes(data.id)
    const productItemRef = useRef(null)
    const handleAdd = ()=>{
        if(added) {
            dispatchCart({
                type: "REMOVE_FROM_CART",
                id: data.id,
            })
        }else {
            dispatchCart({
                type: "ADD_TO_CART",
                id: data.id,
            })
        } 
    }
    
    useEffect(()=>{
        productItemRef.current.classList.add('visible');
    },[])
    return(
        <li className='ProductItem' ref={productItemRef}>
            <Link to={`/product/${data.id}`}>
                <h3>{data.name}</h3>
            </Link>
            <Image imgSrc={`${PROJECT_URL}/img/${data.id}`} />
            <span>price : {data.price}</span>
            <Button
            handleClick={handleAdd}
                style={{
                    color : themeValue.theme.color,
                    borderColor : themeValue.theme.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {added ?(
                    <>
                        <MdRemoveShoppingCart  />
                        Remove from cart
                    </>
                ) : (
                    <>
                        <MdOutlineAddShoppingCart />
                        add to cart
                    </>
                )}
                
            </Button>
        </li>
    )
};

export default ProductItem;