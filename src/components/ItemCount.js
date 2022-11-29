import React, {useState} from 'react';

const ItemCount = ({onAdd}) => {
    
    const [count, setCount] = useState(0)
    
    const addProduct = () => {
        setCount(count + 1)
    }
    const subtractProduct = () => {
        if(count > 0){
            setCount(count -1)
        }
        else{
            console.log("tienes que seleccionar al menos 1 producto")
        }
    }
  
    
    return (
    <div>
        <h4>Unidades:</h4>
            
        <div className='counter-box'>

            <button className='counter-btn' onClick={()=> {subtractProduct(count -1 )}}> - </button>

            <p className='counter-num'>{count}</p>

            <button className='counter-btn' onClick={()=> {addProduct(count + 1)}} > + </button>
        </div>
        
        <button className='confirm-btn' onClick={() => onAdd(count)}>Agregar al Carrito</button>
    
        
    </div>

    

    )
}

export default ItemCount;