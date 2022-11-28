
import React from 'react';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from './ContextProvider';


const ItemDetail = ({producto}) => {

    const {
        title,
        detail,  
        price,
        img,
      } = producto;
      
  
      const {addToCart} = useContext(CartContext);
  
      const onAdd = (count) => {
              addToCart(producto, count)
      }
  
  
      
    return (
        <>
            <img src={img} alt={title} className='img-detail' />
            <div className='contenedor-precio-titulo-detail'>
            <h2 className='detail-title'>{title} - ${price}</h2>
            <p>{detail}</p>
            <ItemCount onAdd={onAdd}/>
            </div>
        </>
    );
}

export default ItemDetail;