import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import List from "./components/List"


function App() {

  const [data, setData] = useState("")


  useEffect(() => {
    fetch("url")    
  }, [])

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
