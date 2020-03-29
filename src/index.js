import React from 'react'
import ReactDom from 'react-dom'
 import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import {ProductProvidor} from './context'
import 'bootstrap/dist/css/bootstrap.min.css';



 ReactDom.render( 
            <ProductProvidor>
            <Router>
               <App/>
            </Router>
            </ProductProvidor>
    , document.getElementById('root'))

