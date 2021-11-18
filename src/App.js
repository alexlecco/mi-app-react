import { useState } from 'react';
import './App.css';
// import Person from './components/Person';

function App() {
  const [ contador, setContador ] = useState(0);

  const incrementarValor = () => {
    setContador(contador + 1);
  }

  const decrementarValor = () => {
    if (contador > 0) setContador(contador - 1);
  }

  console.log("se renderizo App")
  console.log("contador: ", contador)

  return (
    <div className="App">
      <header className="App-header">
        <h3> Mi primera app en React </h3>

        <button onClick={incrementarValor}>incrementar</button>
        {contador}
        <button onClick={decrementarValor}>decrementar</button>

      </header>
    </div>
  );
}

export default App;
