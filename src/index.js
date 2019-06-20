import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import Footer from "./components/footer/Footer";

import './index.css'

ReactDOM.render(
    <Router>
        <App />
        {/* <Footer /> */}
    </Router>
    , document.getElementById('root'))