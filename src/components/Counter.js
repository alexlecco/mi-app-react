import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [ contador, setContador ] = useState(0);

  const incrementarValor = () => setContador(contador + 1);
  const decrementarValor = () => {if (contador > 0) setContador(contador - 1)};

  return(
    <div className="counter">
      <button onClick={incrementarValor}>incrementar</button>
      {contador}
      <button onClick={decrementarValor}>decrementar</button>
    </div>
  )
}

export default Counter;