import React, {useContext} from 'react';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import {ThemeContext} from './context';
import "./app.scss";
function App() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            className="app"
            style={{
            backgroundColor: darkMode
                ? "#222"
                : "white",
            color: darkMode && "white"
        }}>

            <div className="child">
                <Toggle/>
                <Intro/>
                <About/>
                <ProductList/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
