
import { useEffect, useState } from 'react';
import ComponentA from './components/ComponentA'
function App() {
  const [array,setArray] = useState([])
  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=star%20wars&apikey=263d22d8')
      .then(response => response.json())
      .then(json => setArray(json.Search))
    }, [])
  return(
    <ComponentA array={array}/>
  )
}

export default App;
