import './App.css';
import React from 'react';
import Box from './components/Box'
import Colors from './components/colors'

function App() {

  const [colors,setColors] = React.useState([{
    title: 'color 1',
    value:"#61dafb",
    name: "color1"
  },
{
  title: 'color 2',
    value:"#61d8",
    name: "color2"
}])

const [angle, setAngle] = React.useState(20)

function updateColor(name, updateColors) {
  setColors(prevColors => {
    return prevColors.map(item => {
      if(item.name == name) {
        return{
          ...item,
          ...updateColors
        }
      }
      return item
    })
  })
}

const colorValues = colors.map(items => {
  return items.value
})

const colorChoices = colors.map(info =>{
  return(
    <Colors
    info = {info}
    key = {info.title}
    onChange = {updateColor}
    delete = {deleteColor}
    />
  )
})

function changeAngle(event) {
  setAngle(event.target.value)
}

function deleteColor (name) {
  if(colors.length > 2) {
    setColors(prevColors => {
      return prevColors.filter(item => item.name !== name)
    })
  }
}

const background = {
  background: `linear-gradient(${angle}deg, ${colorValues})`,
  height: "70%",
  width:"80%",
  alignSelf: "center",
  marginBottom:"15px",
  borderRadius: "5px"
}

const textAreaValue = `background:${background.background} \n-moz-background: ${background.background} \n-webkit: ${background.background}`

function selectColor(){
  if(colors.length < 3) {
    setColors(prevColors => ([
      ...prevColors,
      {
        title: `Color ${prevColors.length + 1}`,
        value: "#000",
        name: `color${prevColors.length + 1}`
      }
    ]))
  }
}

  return (
    <div className="App">
      <Box>
        <div style={background}></div>
        <textarea readOnly rows='9' value={textAreaValue}></textarea>
      </Box>

      <Box>
        <h2>Color Options</h2>
        {colorChoices}

        <input
          type="number"
          name="angle"
          value={angle}
          onChange={changeAngle}
        ></input>

        <button className='button' onClick={selectColor}>Select Color</button>
      </Box>
    </div>
  );
}

export default App;
