import React, { Component } from 'react';
import BookService from '../services/BookService';
import book from '../assets/images/travel1.jpg';
import Header from './Header';

class AllBooks extends Component {
    constructor(props) {
        super(props);
        
        this.service = new BookService();
                this.state = {
                    }
        if(!localStorage.getItem('customer')){
            alert('Please Login')
            this.props.history.push('/login')
            
        }
        else{
            if(JSON.parse(localStorage.getItem('customer')).isadmin === 1 ){
                
            }
            else{
                alert('Access Denied')
                this.props.history.push('/')
               
            }
        }
    }
       

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        this.service.getBooks().then(data => {
            console.log(data);
            this.setState({books : data})
        })
    }

    
    onDelete = (bid) => {  

        if(window.confirm("Are you sure you want to delete the book " + bid + " ?")) {
            this.service.deleteBook(bid).then(response => {
                this.getBooks();
            })
        }
    }

    
    onEdit = (book) => {
        localStorage.setItem('book', JSON.stringify(book));
        console.log("book to be updated : ",localStorage.getItem('book'));
        this.props.history.push('/updateBook');
    }

    render() {
        if(!localStorage.getItem('customer')){
            if(!this.state.books)
                return null;
        }
        else{
            if(JSON.parse(localStorage.getItem('customer')).isadmin === 1  )
                if(!this.state.books)
                    return null;
        }
        
       

        const booklist = this.state.books.map(b => {
            return (
                <div className="card m-4 " style={{width: 350, height: "fit-content"}}>
                    
                        <div className="card-header">
                            <h5>book {b.bookId}</h5>
                        </div>
                        
                        <div className="card-body">
                        <div className="row mb-2">
                            <div className="col fw-bold">Book Name</div>
                            <div className="col">{b.bookName}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col fw-bold">Price</div>
                            <div className="col">{b.bookPrice}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col fw-bold">Book Status</div>
                            <div className="col">{b.bookStatus}</div>
                        </div>   
                        <div className="row mb-2">
                            <div className="col fw-bold">Available Books</div>
                            <div className="col">{b.availableBooks}</div>
                        </div>    
                        <br/>
                            <button className="btn btn-dark mr-3" onClick={() => this.onDelete(b.bookId)}>Delete</button>
                            <button className="btn btn-info" onClick={() => this.onEdit(b)}>Update</button>
                        </div>
                        
                    
                </div>
            )
        });

        return (
            <div style={{backgroundImage: `url(${book})`,overflow: 'hidden', height: '20000px'}}>
                <Header/>
                <div className="pt-5">
                <div className="pt-3"  style={styling.wrapper}>
                {booklist}
                </div>
            </div>
            </div>
        );
    }
}

let styling = { 
    wrapper : {
        height: "700px",
        display : "flex", 
        flexWrap: "wrap", 
        justifyContent: "center"
    }
}

export default AllBooks;