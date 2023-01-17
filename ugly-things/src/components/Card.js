import Data from "../data";
import { useContext, useState } from "react";

function Card(props){
    const dataContext = useContext(Data)

    const[edit, setEdit] = useState(false)

    function updateEdit(){
        setEdit(prevEdit => !prevEdit)
    }

    const [editUgly, setEditUgly] = useState({
        title: props.data.title,
        description: props.data.description
    })

    function handleEdit(event){
        const {name, value} = event.target
        setEditUgly(prevUgly => ({
            ...prevUgly,
            [name]: value
        }))
    }

    function handleUpdateEdit(){
        setEdit(false)

        dataContext.editData(props.data._id,editUgly)
    }

    return(
        <div className="card">
            <h1 className="card-title">{props.data.title}</h1>

            <img src={props.data.imgUrl}/>

            <h3 className="card-description">{props.data.description}</h3>

            <div>
                <button onClick={() =>
                dataContext.deleteData(props.data._id)}>Delete</button>
                {/* show edit button */}
                {!edit && <button onClick={updateEdit}>Edit</button>}
                {/* show update button */}
                {edit && <button onClick={handleUpdateEdit}>Update</button>}
            </div>
            {edit && <div>
                <input
                    name="title"
                    value={editUgly.title}
                    onChange={handleEdit}
                    />
                    <input
                    name="description"
                    value={editUgly.description}
                    onChange={handleEdit}
                    />
                </div>}
        </div>
    )
}

export default Card