import React from "react";

function Colors(props){
    const [colorChoice, setColorChoice] = React.useState({
        name: props.info.name,
        value: props.info.value
    })

    function handleOnChange(event) {
        const {name, value} = event.target
        setColorChoice(prevColors => ({
            ...prevColors,
        name: name,
        value: value
    }))
    props.onChange(props.info.name,
        colorChoice)
    }

    return(
        <div className="color-selection">
            <h3>{props.info.title}</h3>
            <h3>{props.info.value}</h3>

            <input onChange={handleOnChange}
            type="color"
            name={props.info.name}
            value={colorChoice.value}
            />

            <button onClick={()=> props.delete(props.info.name)}>Delete</button>
        </div>
    )
}

export default Colors