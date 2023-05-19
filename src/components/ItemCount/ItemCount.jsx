import { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  let maximo = 10;
  
  const incrementar = () => {
    if(contador < maximo){
      setContador(contador + 1);
    }
  }

  const decrementar = ()=> {
    if(contador> 1) {
      setContador(contador - 1);
    }
  }

  return (
    <div className='contador-contenedor'>
      <button onClick={decrementar}> - </button>
      <p> {contador} </p>
      <button onClick={incrementar}> + </button>
    </div>
  )
}

export default ItemCount
