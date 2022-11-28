import React from 'react'

export default function CartItem(props) {
  
  
    const {
      id,  
      img,
      title,
      price,
      qty,
      removeItemFromCart
    } = props 
  
  
    return (
      
      <li className="items">
          <div className="infoWrap"> 
            <div className="cartSection">
              <img alt="" src={img} width={500} height={300} className="itemImg" />
              <h3>{title}</h3>
              <p> <input type="text" disabled className="qty" placeholder={qty}/> x ${price}</p>
              <p className="stockStatus"> In Stock</p>
            </div>  
            <div className="prodTotal cartSection">
              <p>${price * qty}</p>
            </div>
            <div className="cartSection removeWrap">
              <button onClick={() => removeItemFromCart(id)}  className="remove-product">X</button>
            </div>
          </div>
      </li>
      
  
    )
  }
  
  