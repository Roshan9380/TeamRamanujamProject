import React, { Component } from 'react';
import '../assets/css/TicketStyle.css'
import ReactToPrint from 'react-to-print'
import bookorder from "../assets/images/planebg1.jpg";
import Header from './Header';

class OrderDetail extends Component {
    
    constructor(props){
        super(props)
        if(!localStorage.getItem('customer'))
        {
            this.props.history.push('/login')
        }
        else{
        if(localStorage.getItem('orderDetail') !==null){
            console.log('if')
            console.log(localStorage.getItem('orderDetail'))
            this.orderDetail=JSON.parse(localStorage.getItem('orderDetail'))
            this.book = JSON.parse(localStorage.getItem('book'))
            // localStorage.removeItem('orderDetail')
        }
        else{
            console.log('else')
            this.orderDetail=JSON.parse(localStorage.getItem('view-orderDetail'))
            localStorage.removeItem('view-orderDetail')
        }
        console.log("OrderDetail: "+ this.orderDetail)
        console.log("OD: "+ this.orderDetail.orderDetailId)
        console.log("Book Name: " + this.orderDetail.order.book.bookName)
        console.log("Booking Date: "+ this.ticket.orderDate)
        console.log("Total Amount: "+ this.ticket.orderAmount)
       
    }

}

componentDidMount(){
    if(!localStorage.getItem('customer'))
    {
        this.props.history.push('/login')
    }
   
}


onBooks = () =>{
    this.props.history.push('/books')
}


render() {
    if(!this.orderDetail){
        return null
    }
    
    
return (

   <div class='pt-3'>
    <Header />
    <div class="py-5" style={{backgroundImage: `url(${bookorder})`,overflow: 'hidden', height: '700px'}}>
    
        <div style={{textAlign:'right', marginRight:'90pt', marginTop:'130pt'}}>
        <ReactToPrint 
            trigger={() => <a class="btn text-light bg-dark" role="button" href="#">Print The OrderDetail</a>}
            content={() => this.componentRef}
        />
        </div>


        <div class="box pt-2" ref={el => (this.componentRef = el)}>
        <div class="orderDetail">
            <span class="book">Book Store Management</span>
            <span class="bookName">Book Name : {this.orderDetail.order.book.bookName}</span>
            <div class="content">
            <span class="jfk">{this.orderDetail.order.book.bookName}</span>
            <span class="book"><svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>

            
            <div class="sub-content">
                <span class="watermark">BookStoreManagementSystem</span>
             
                <span class="book">book Id.&deg;<br />
                <span>{this.orderDetail.order.book.bookId}</span> <br />
                </span>

                <span class="gate">orderDetail Id.&deg; <br /><span>{this.orderDetail.orderDetailId}</span></span>
                
                <span class="amount">Amount Paid<br />
                    <span>₹{this.orderDetail.orderAmount}</span> <br />
                </span>

            
            </div>
            </div>
            <div class="barcode"></div>
        </div>
        
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        </div>
        
        </div>
        </div>
    )
}
}
export default OrderDetail;