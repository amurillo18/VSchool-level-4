import themeContext from "../themeContext";
import { useContext } from "react";

function Body() {
    const theme = useContext(themeContext)

    return(
        <div className={`${theme.color}--body`}>
            <h1>Click the Button to toggle the {theme.color} theme.</h1>
            <select onChange={theme.changeTheme} className="select--theme">
                <option value="light">
                    Light
                </option> 
                <option value="dark"> 
                    Dark
                </option>
                <option value="invert-light">
                    Invert-Light
                </option>
                <option value="invert-dark">
                    Invert-Dark
                </option>
            </select>
        </div>
    )
}

export default Body