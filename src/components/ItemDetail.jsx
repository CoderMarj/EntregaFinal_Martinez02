import {useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

const {agregarAlCarrito} = useContext(CartContext);

const [cantidad, setCantidad] = useState(1);

const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
}

const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
}

  return (  
     <div className="container">
         <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
               <div>
                 <h3 className="titulo"> {item.titulo} </h3>
                 <p className="categoria"> {item.genero} </p>
                 <p className="precio"> {item.precio} </p>
                 < ItemCount
                     cantidad={cantidad}
                     handleSumar={handleSumar}
                     handleRestar={handleRestar}
                     handleAgregar={() => { agregarAlCarrito(item, cantidad)}} />
                </div> 
          </div>
     </div>
  )
}

export default ItemDetail