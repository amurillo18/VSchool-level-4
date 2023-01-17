import { useState, useEffect} from 'react'
import axios from 'axios'
import Data from './data'
import Header from './components/Header'
import Card from './components/Card'
import './App.css';

function App() {

  const [data, setData] = useState([])

  // GET request
  useEffect(() => {
    axios.get("https://api.vschool.io/aprilmurillo/thing").then(response => setData(response.data))
  },[])

  // Input the data
  const [input, setInput] = useState({
    title: "",
    imgUrl: "",
    description: ""
  })

  function handleInput(event) {
    const {name, value} = event.target
    setInput(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  // Submit the Data
  function submitData() {
    // POST request
    axios.post("https://api.vschool.io/aprilmurillo/thing", input).then(response => {
      setData(prevData => ([
        ...prevData,
        response.data
      ]))
    })
    setInput({
      title: "",
      imgUrl: "",
      description: ""
    })
  }

const card = data.map(data => (
  <Card
    data={data}
    key={data._id}
    />
))

  // Delete data
  function deleteData(id) {
    axios.delete(`https://api.vschool.io/aprilmurillo/thing/${id}`).then(setData(prevData => {
      return prevData.filter(card => card._id !== id
      )
    }))
  }

  // Update/edit data and reruns useEffect
  function editData(id, editField){
    axios.put(`https://api.vschool.io/aprilmurillo/thing/${id}`, editField).then(setData( prevData => { return prevData.map(card => {
      if(card._id === id) {
        return{
          ...card,
          ...editField
        }
      }
      return card
    })
  })
  )
  }
  return (
    <Data.Provider value={{
      data,
      input,
      handleInput,
      submitData,
      deleteData,
      editData
    }}>
    <div className="App">
      <Header />
      {card}
    </div>
    </Data.Provider>
  );
}

export default App;
