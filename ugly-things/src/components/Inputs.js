import Data from '../data'
import { useContext } from 'react'

function Inputs(props) {
    const dataContext = useContext(Data)

    return(
        <form className='input'>
            <input
                placeholder='Title'
                className='input-field'
                name='title'
                onChange={dataContext.handleInput}
                value={dataContext.input.title}
             />
             <input
                placeholder='Image URL'
                className='input-field'
                name='imgUrl'
                onChange={dataContext.handleInput}
                value={dataContext.input.imgUrl}
             />
             <input
                placeholder='Description'
                className='input-field'
                name='description'
                onChange={dataContext.handleInput}
                value={dataContext.input.description}
             />
        </form>
    )
}

export default Inputs