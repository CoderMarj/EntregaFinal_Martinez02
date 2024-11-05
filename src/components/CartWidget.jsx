import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import IconoCarrito from './IconoCarrito';


const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext)

  return (
    <>
      <div className='numerito'>     
        <NavLink to="/carrito">
           <IconoCarrito />
        </NavLink > 
        <spam className = " numerito-carrito" >{cantidadEnCarrito()}</spam>
        </div>  
    </>
  );
};

export default CartWidget;