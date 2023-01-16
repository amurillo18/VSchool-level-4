
import './App.css';
import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeContext from './themeContext'

function App() {

	const [theme, setTheme] = useState("light")

	function changeTheme(event) {
		setTheme(event.target.value)
	}

  return (
	<ThemeContext.Provider value={
		{
			color: theme,
			changeTheme: changeTheme
		}
	}>
		<div className={`${theme}--App`}>
			<Header />
			<Body />
			<Footer/>
      
	  </div>
	</ThemeContext.Provider>
  );
}

export default App;
