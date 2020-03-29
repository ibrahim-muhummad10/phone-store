import React, {Component} from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './button'




export default class Details extends Component {

    render(){
        return(
     
 <ProductConsumer>
 {value=>{
  const {id,company,img,info,price,title,inCart} = value.detailProduct;
  
      return(
        <div className="container py-5">
          <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h2>{title}</h2>
              </div>
          </div>
          <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product"/>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3">
                    <h2>model:{title}</h2>
                    <h4 className="text-uppercase text-muted mt-3 mb-2">
                       made by: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue"> 
                      <strong>
                        price:<span>$</span> {price}
                       </strong>
                    </h4>
                  <p className="font-whight-bold text-capitalize mt-3 mb-0">
                      some info about product
                  </p>
                   <p className="text-muted lead "> {info}</p>

                  <div>
                  <Link to="/">
                       <ButtonContainer>
                           back to product
                       </ButtonContainer>
                   </Link>
                   <ButtonContainer cart disabled={inCart?true:false} 
                   onClick={()=>{
                       value.addToCart(id)
                       value.openModal(id);
                   }}>

                          {inCart?"in cart":"add to cart"}
                   </ButtonContainer>
                  </div>
              </div>   
          </div>
        </div>
    )
}}

 </ProductConsumer>

        )
    }
}

