import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import List from "./components/List"


function App() {

  const [data, setData] = useState("")


  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('https://www.reddit.com/r/popular.json');
      const json = await response.json();
      setData(json.data.children);
    }

    fetchData()
      .catch(console.error);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Reddit-Slim
        </p>
      </header>
      <main>
        <List data={data} />
      </main>
    </div>
  );
}

export default App;
