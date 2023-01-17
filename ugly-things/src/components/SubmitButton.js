import Data from '../data'
import { useContext } from 'react'

function SubmitButton() {
    const dataContext = useContext(Data)
    
    return(
        <div>
            <button onClick={dataContext.submitData} className="submitButton">Submit</button>
        </div>
    )
}

export default SubmitButton