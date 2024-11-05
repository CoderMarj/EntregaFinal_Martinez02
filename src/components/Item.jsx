import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <h4 className="titulo"> {producto.titulo} </h4>
                <p className="categoria"> {producto.genero} </p>
                <p className="precio"> {producto.precio} </p>

                <Link className="ver-mas" to={`/item/${producto.id}`} >ver más..</Link>
            </div>
        </div>
    )
}

export default Item