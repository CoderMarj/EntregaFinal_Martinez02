import { useState, useEffect} from "react";
//import {pedirDatos} from "./toolsFunction/toolsFunction"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../components/firebase/config"



const ItemListContainer = () => {

 const [productos, setProductos] = useState([]);

 const [titulo, setTitulo] = useState("Productos");

 const { categoria } = useParams();

  useEffect(() => {
 
    const productosRef = collection(db, "peliculas");
    
    const q = categoria ? query(productosRef, where ("genero", "==", categoria)) : productosRef;
    

     getDocs(q)
        .then((resp) => {
           setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
           );
           categoria ? setTitulo(categoria) : setTitulo("Productos")
        });
        
      }, [categoria]);

      

 return (

   <div>
      < ItemList productos = { productos } titulo = { titulo } />
   </div> 

 );
};

export default ItemListContainer