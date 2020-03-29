import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'



export default class Product extends Component {

    render(){
        const {id, img, title, inCart,price} = this.props.product;
        return(
          <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
             
              <div className="card">
                  <ProductConsumer>
                      {value=>
                         <div className="img-container py-5"
                          onClick={()=>value.handelDetail(id)}>
                         <Link to ="/details">
                             <img src={img} alt="product" className="card-img-top"/>
                         </Link>
                         <button className="cart-btn " disabled={inCart?true:false}
                          onClick={()=>{
                      value.addToCart(id);
                            value.openModal(id);
                          }}>
                                        
                             {inCart?(<p className="mb-0" disabled>in Cart</p>) : (<i className="fa fa-cart-plus" aria-hidden="true"></i>)  }
                         </button>
                       </div>
                      }
               
                  </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                     <p className="mb-0 align-self-center">{title}</p>
                     <h5 className="mb-0 text-blue font-italic">
                         <span className="mr-1">$</span>
                          {price}</h5>    
                </div> 
              </div>

          </ProductWrapper>
            
        )
    }
}

Product.propTypes ={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool

    }).isRequired   
}

const ProductWrapper = styled.div`


.card{
    border: transparent;
    transition: all 1s linear;

}
.card-footer
{
    border-top: transparent;
    background: transparent;
    transition: all 1s linear;
}

&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0 rgba(0,0,0,0.2)
    }
    .card-footer{
        background: rgb(247.247.247);
    }
}

.img-container
{
    position: relative;
    overflow:hidden;
}

.card-img-top
{
    transition: all .5s linear;
}

.img-container:hover .card-img-top{
    transform: scale(1.1);
}

.cart-btn
{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all .5s linear;
}

.img-container:hover .cart-btn{
    transform: translate(0,0);
}

.cart-btn:hover
{
    color: var(--mainBlue);
    cursor: pointer;
}

`