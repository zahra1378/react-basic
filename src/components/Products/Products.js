import React from "react";
import ProductItem from "../ProductItem/ProductItem";

const Products = ({props}) =>{
    return (
        <ul className='products'>
        {props.map((item)=>(
          <ProductItem key={item.id} data={item} />
        ))}
      </ul>
    );
};

export default Products