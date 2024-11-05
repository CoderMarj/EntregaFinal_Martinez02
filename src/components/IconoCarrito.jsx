import SvgCar from '../assets/cart-shopping-solid.svg';

const IconoCarrito = () => {
  return (
    <div>
        <img  src={SvgCar} alt="icono-carrito"  with={25} height={25} className='cursor-pointer' style={{ color:"white"}} />    
    </div>
  )
}

export default IconoCarrito