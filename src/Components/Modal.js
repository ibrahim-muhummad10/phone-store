import React, {Component} from 'react'
import styled from 'styled-components'
import {ButtonContainer} from './button'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'

export default class Modal extends Component {
    render(){
        return(

        <ProductConsumer>
            {(value)=>{
                const {modalOpen,closeModal} = value;
                const {img,title,price} = value.modelProduct;
                if(!modalOpen)
                {
                    return null;
                }
                else
                {
                    return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="py-5 col-8 mx-auto text-capitalize col-md-6 col-lg-4 text-center">
                                        <h5>item add to the cart</h5>
                                        <img src={img} alt="product" className="img-fluid"/>
                                          <h5>{title}</h5>
                                          <h5 className="text-muted">price: ${price}</h5>
                                          <Link to="/">
                                              <ButtonContainer onClick={()=>closeModal()}>
                                                  continue shopping
                                              </ButtonContainer>
                                          </Link>
                                          <Link to="/cart">
                                              <ButtonContainer cart onClick={()=>closeModal()}>
                                                  go to cart
                                              </ButtonContainer>
                                          </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )
                   
                }
            }}
        </ProductConsumer>            
        )
    }
}


const ModalContainer = styled.div`

position:fixed;
top:0;
right:0;
left:0;
bottom:0;
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite);
}
`