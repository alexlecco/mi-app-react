import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4> Mi primera app en React </h4>

        <Person name="Alex" age="32" />
        <Person name="Diego" age="31" />

      </header>
    </div>
  );
}

export default App;
