import React, { Component } from 'react';
import BookService from '../services/BookService';
import book from '../assets/images/travel1.jpg';
import Header from './Header';

class UpdateBook extends Component {

    constructor(props){
        super(props);
        
        if(!localStorage.getItem('customer')){
            alert('Please Login')
            this.props.history.push('/login')
        }
        else{
            if(JSON.parse(localStorage.getItem('customer')).isadmin === 1 ){
                this.service = new BookService();
                this.temp = JSON.parse(localStorage.getItem('book'));
                this.state = {
                    bookId: this.temp.bookId,
                    bookName : this.temp.bookName,
                    bookPrice: this.temp.bookPrice,
                    bookStatus: this.temp.bookStatus,
                    availableBooks: this.temp.availableBooks
                }
            }
            else{
                alert('Access Denied')
                this.props.history.push('/')
            }
        }

        console.log("book", this.temp);
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }

   
    onUpdate = (e) => {
        e.preventDefault();
        const book = this.state;
        console.log(book);
        this.service.updateBook(book);
        alert("Your book has been updated");
        this.props.history.push('/allBooks')
    }

    render() {
        if(!localStorage.getItem('customer')){
            return null
        }
        else{
            if(JSON.parse(localStorage.getItem('customer')).isadmin === 0  )
            {return null}
        }
        return (
            <div>
                <Header/>
            <div className="container-fluid" style={styling.wrapper}>

            <form className="m-auto mt-3 m-1 border border-dark p-3" onSubmit={this.onUpdate}
             style={styling.formStyle}>
                <h3 className="mb-3" style={styling.heading}>Update Book</h3>
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Book Id</label>
                    <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.bookId}
                     name="bookId" disabled />
                </div>
               
                <div className="input-group mb-2 mr-sm-2">
                      
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2" for="bookName">Book Name</label>
                    <input type="text" className="col-5 my-1 p-1 border border-darken-2" value={this.state.bookName}
                    name="bookName" onChange={this.handleInput}  required />
                </div>        
                
                
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Book Price</label>
                    <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.bookPrice}
                     name="price" onChange={this.handleInput}  required />
                </div>

                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Book Status</label>
                    <input type="text" className="col-5 my-1 p-1 border border-darken-2" value={this.state.bookStatus}
                    name="bookStatus" onChange={this.handleInput}  required />
                 </div>

                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Available books</label>
                    <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.availableBooks}
                     name="availableBooks" onChange={this.handleInput}  required />
                </div>
                
                <button type="submit" className="mr-4 btn btn-warning">Submit</button>
                <button type="reset" className="btn btn-outline-dark">Reset</button>
            </form>
            </div>
        </div>

        );
    }
}

let styling = {
    wrapper : {
        background: `url(${book})`,
        paddingTop : 70,
        paddingBottom: 70
    },
    heading : {
        color : "#333333",
        textAlign: "center"
    },
    formStyle : {
        minWidth: 300, 
        maxWidth: 500
    }
}

export default UpdateBook;