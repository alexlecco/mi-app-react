import './App.css';
import Counter from './components/Counter';
// import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3> Mi primera app en React </h3>

        <Counter />
        <Counter />

      </header>
    </div>
  );
}

export default App;
