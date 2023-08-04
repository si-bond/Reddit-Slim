import React, {useState, useEffect} from 'react'
import './App.css';
import List from "./components/List"
import Header from "./components/Header/Header"


function App() {

  const [data, setData] = useState("")
  const [loaded, setLoaded] = useState(false)

  //https://reddit-kerosz.vercel.app/#/


  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('https://www.reddit.com/r/popular.json');
      const json = await response.json();
      setLoaded(true)
      setData(json.data.children);
    }

    fetchData()
      .catch(console.error);
  }, [])

  const searchReddit = async (searchText) => {
    
    setLoaded(false)

    const response = await fetch(`https://www.reddit.com/search.json?q=${searchText}`);
    const json = await response.json();
    setLoaded(true)
    setData(json.data.children);

  }

  return (
    <div className="App">
      <header>
        <Header 
          handleSearch={searchReddit}
        />
      </header>
      <main>
        {loaded?<List data={data} />:"Loading Data"}
      </main>
    </div>
  );
}

export default App;
