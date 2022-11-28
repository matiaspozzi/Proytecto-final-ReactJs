
import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategoryId } from "../Categorys";
import { db } from "../../firebase";
import { collection, documentId, getDocs, query, where } from "firebase/firestore";



const ItemListContainer = () => {
    
    const [items, setItems] = useState([]) 

    const {category} = useParams() 

    useEffect(() => {

        const productosCollection = collection(db,"productos")

        setItems([])

        if(category){
           
            

            const filtro = query(productosCollection,where("category","==",category))
            const consulta = getDocs(filtro)

            consulta
            .then((resultado) => {
                const productos = resultado.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setItems(productos);
                })
                .catch((error) =>{
                    console.log(error)
                })

                
        }else{
            
            const consulta = getDocs(productosCollection)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

        }
    }, [category])

    return (
        <div className='contenedor'>
            <h1>Productos</h1>
            {items.length == 0 ? <h1 className="loading">Cargando...</h1> : <ItemList items={items} />}
        </div>
    )   

}

export default ItemListContainer;