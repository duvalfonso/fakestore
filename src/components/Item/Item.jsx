import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, description, price, img}) => {
  return (
    <div className='card-producto'>
      <img src={img} alt="" />
      <h3>{description}</h3>
      <strong>Precio: $ {price}</strong>
      <p>ID: {id}</p>
      <Link to={`/item/${id}`} > Ver Detalles</Link>
    </div>
  )
}

export default Item
