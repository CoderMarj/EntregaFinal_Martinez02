import React, { useContext } from 'react'
import { CartContext } from '../components/context/CartContext'
import {Link, NavLink} from 'react-router-dom';


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {   carrito.length > 0 &&
            carrito.map((prod) => (
                <div key={prod.id} >
                    
                    <h2>Genero: {prod.genero}</h2>
                    <h3>Pelicula: {prod.titulo}</h3>
                    <p>Precio unit: $ {prod.precio}</p>
                    <p>Precio total: $ {prod.precio * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button className="enviar" onClick={handleVaciar}>Vaciar</button>
                <br />
                <Link className="ver-mas" to="/checkout">Finalizar compra</Link>
            </> : 
                 <>
                    <h2>El carrito está vacío :)</h2>
                    <br />
                    < NavLink className="ver-mas" to={"/"}>Home</NavLink>
                 </>
        }
        
    </div>
  )
  
}

export default Carrito