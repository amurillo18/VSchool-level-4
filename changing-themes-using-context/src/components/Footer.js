import { useContext } from "react";
import themeContext from '../themeContext'

function Footer() {
    const theme = useContext(themeContext)

    return(
        <div className={`${theme.color}--footer`}>
            <h5>This is the Footer</h5>
        </div>
    )
}

export default Footer