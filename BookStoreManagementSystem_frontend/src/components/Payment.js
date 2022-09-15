import React, { Component } from 'react';
import amex from '../assets/images/amex.png';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';
import OrderService from '../services/OrderService';
import { withRouter } from "react-router";
import bookorder from "../assets/images/planebg1.jpg";
import Header from './Header';


class Payment extends Component {
    
    constructor(props){
        super(props)
        if(!localStorage.getItem('customer')){this.props.history.push('/login')}
        else{
        this.service = new OrderService();
        this.state={
            orderDetaild_Id:0,
            order_date:0,
            order_amount:0,
            name:''
        }
    }
    }

    createorderDetails = () => {
        console.log(this.state.name)
        this.service.generateorderDetails(this.state).then(response => {
            console.log(response.data)
            if(response.status===200)
                this.props.history.push('/orderDetails')
        })
        
            
    } 

    
    
    render(){
        if(!localStorage.getItem('customer')){return null}
    return (
        
        <div class='pt-5'>
        <Header />
        <div class="py-5" style={{backgroundImage: `url(${bookorder})`,overflow: 'hidden', height: '800px'}}>
            <div className="row mb-4">
					<div className="col-lg-8 mx-auto text-center">
					{}
					</div>
			</div>
            <div className="row">
				 <div className="col-md-6 mx-auto">
					<div className="card ">
					   <div className="card-header">
                           <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">


                           <div className="tab-content">
                                <div className="tab-pane fade show active pt-3">
                                    <div className="container">
                                        <h4 align="center">Payment</h4>
                                        <br/>

                                <div className="row">
                                        <div className="col-md-6">
                                             <span><h6>CREDIT/DEBIT CARD</h6></span> 
                                        </div>
                                         <div className="col-lg-6 text-right" style={{marginTop: "-5px"  }} >
                                         {/* style="margin-top: -5px; */}
                                             <img src={visa} alt="visa card "/> 
                                             <img src={mastercard} alt="mastercard"/>
                                             <img src={amex} alt="amex card"/> 
                                        </div> 
                                        
                                </div>
                                <br></br>
                                <form>
                                <div className="form-group">
                                        <label for="cc-number" className="control-label">CARD NUMBER</label> 
                                        <input name="cnumber"  type="mobile" className="form-control" placeholder="•••• •••• •••• ••••" pattern="[0-9]{16}" required/> 
                                </div>
                                
                                <br></br>

                                <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group"> 
                                            <label for="cc-exp" className="control-label">CARD EXPIRY</label>
                                            <input id="cc-exp" type="month" className="form-control"  required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group"> <label for="cc-cvc" className="control-label">CARD CVV</label>
                                            <input name="cvc" type="mobile" className="form-control" placeholder="•••" pattern="[0-9]" required /> 
                                            </div>
                                        </div>
                                </div>
                                
                                <br></br>
                                <div className="form-group"> 
                                        <label for="holder-name" className="control-label">Card Holder Name</label> 
                                        <input name="cname" type="text" className="form-control" pattern="[A-Za-z]{4,}" required />
                                </div>
                                
                                <br></br>
                               
                        
                                <div className="card-footer"> 
                                   <div className="col-md-12 text-center">
                                        <button type="submit" onClick={this.createorderDetails} className="subscribe btn btn-primary btn-block shadow-sm"> Confirm Payment </button>
                                    </div> 
                                </div>
                                </form>
                                             </div>
                                         </div>
                                   </div>                           
                            </div>
                       </div>
                   </div>
                </div>
            </div>           
                 
        </div>
		</div>
         );
    }
}

export default withRouter(Payment);