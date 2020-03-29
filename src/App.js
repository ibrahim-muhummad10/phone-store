import React, {Component} from 'react'
 import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Default from './Components/Default'
import Cart from './Components/Cart/Cart'
import Modal from './Components/Modal'


class App extends Component {

    render(){
        return(
          <React.Fragment>
            <Navbar/>
            <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/Details" component={Details}/>
            <Route exact path="/Cart" component={Cart}/>
            <Route  component={Default}/>
            </Switch>
            <Modal/>
          </React.Fragment>
            
        )
    }
}
export default  App;