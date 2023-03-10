import { useContext } from "react";
import themeContext from '../themeContext'

function Header(props){

    const theme = useContext(themeContext)

    return(
        <div className={`${theme.color}--header`}>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
    )
}

export default Header