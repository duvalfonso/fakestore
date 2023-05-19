import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({id, description, category, price, img}) => {
  return (
    <div className='contenedor-item'>
      <img src={img} alt={description} />
      <div className="contenedor-detalle">
      <h2>{description}</h2>
      <strong>$ {price}</strong>
      <p>ID del producto: {id} </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum numquam accusantium ad officia quas quam officiis, tenetur facilis debitis qui?</p>
      <ItemCount />
      </div>
    </div>
  )
}

export default ItemDetail
