import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';




const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({});
    const [loading,setLoading] = useState(true)
    const {id}=useParams()

    
    useEffect(() => {
       
                const getProducto = async () => {
        
                    const queryRef = doc(db, "productos", id);
        
                    const response = await getDoc(queryRef);
        
                    const newItem = {
                      id: response.id,
                      ...response.data(),
                    };
        
                    setTimeout(()=>{
   
                        setProducto(newItem);
                      setLoading(false)
                    }, 2000)
                  };
       
                  getProducto();
             },[id]);
        
        
        return(
                <div className='contenedor-detail'>
                {
                 loading ? <h1 className='loading'>Cargando...</h1> : <ItemDetail producto={producto}/>
                 }
                </div>
                )}
                export default ItemDetailContainer