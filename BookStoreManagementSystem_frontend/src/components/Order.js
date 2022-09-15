import React, { Component } from 'react';
import bookorder from "../assets/images/planebg1.jpg";
import OrderService from '../services/OrderService';
import Header from './Header';

class Order extends Component {


    constructor(props){
        super(props)
        this.service = new OrderService();
        this.flag=false
        if(JSON.parse(localStorage.getItem('book'))===null){
            this.props.history.push("/")
        }
        else{
        this.book = JSON.parse(localStorage.getItem('book'));
        this.flag=true
        this.state={
            bookId: this.book.bookId,
            bookName: this.book.bookName,
            numberOfBooksToBook:0
            }
        }
    }
    componentDidMount(){
        if(!JSON.parse(localStorage.getItem("customer"))){
            this.props.history.push("/login")
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    change = (event) => {
        this.setState({numberOfBooksToBook: event.target.value});
    }

    render(){
        return (
            <div class='pt-5'>
            <Header />  
        <div class='pt-5' style={{backgroundImage: `url(${bookorder})`,overflow: 'hidden', height: '700px'}}>
          <div class="row mb-4">
                <div class="col-lg-8 mx-auto text-center">
                <h1 class="display-6" style={{color:'white', fontWeight:'50pt'}}>Order Book</h1>
                </div>
            </div> 

			<div class="row">
				<div class="col-md-6 mx-auto">
					<div class="card ">
					    <div class="card-header">
                            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active pt-3">
                                        <form>
                                        <div class="form-group">
                                        <h6><span class="form-label">Book Id</span></h6>
                                        { this.flag &&
										<input class="form-control" type="text" onChange={this.handleInput} value={this.state.bookId} name="bookId" readOnly />
                                        }
                                        </div>
                                        
                                        <div class="form-group">
									    <h6><span class="form-label">Book Name</span></h6>
                                        { this.flag &&
										<input class="form-control" type="text" onChange={this.handleInput} value={this.state.bookName} name="bookName" readOnly />
                                        }
                                        </div>

                                        <button type="submit" className="btn btn-warning mr-4"> Purchase </button>
                                        
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
        );
    }
}

export default Order;