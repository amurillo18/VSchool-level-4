import Inputs from './Inputs'
import SubmitButton from './SubmitButton'

function Header(){
    return(
        <div className='header'>
            <h1>Ugly Things</h1>
            <Inputs/>
            <SubmitButton/>
        </div>
    )
}

export default Header