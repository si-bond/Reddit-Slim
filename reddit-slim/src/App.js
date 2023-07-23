import logo from './logo.svg';
import './App.css';
import List from "./components/List"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Reddit-Slim
        </p>
      </header>
      <main>
        <List />
      </main>
    </div>
  );
}

export default App;
