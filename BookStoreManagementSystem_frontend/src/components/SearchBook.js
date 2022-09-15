import React, { Component } from 'react';
import BookList from './BookList';
import BookService from '../services/BookService';
import search from '../assets/images/login.jpeg';

class SearchBook extends Component {
    constructor(props) {
        super(props);
        this.service = new BookService();
        this.flag = false
        this.state = {
            bookName : "",
            searched : false
        }
    }

    componentDidMount(){
        this.setState({
            searched: false
        })
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    
    getBooksList = () => {
        this.setState({
            searched: false
        });
        const s = this.state.bookName;

        this.service.getBooksForCustomer(s).then(data => {
            if(data.length>0){
                this.setState({
                    books : data,
                    searched : true
                });
               
            }
            else{
                alert('No Books Found!!')
        }
            
        })
    }

    render() {
        return (
            <div className="container-fluid p-4 m-3">
                <h2 style={styling.heading}>Search for Books</h2>
                <div className="form-inline">
                    
                    <div className="input-group mb-2 mr-sm-2">   
                        <label className="col-4 my-1 p-1 bg-light border border-darken-2">Book Name</label>
                        <input type="text" className="col-5 my-1 p-1 border border-darken-2" value={this.state.bookName}
                        name="bookName" onChange={this.handleInput}  required />
                    </div>
                    
                    <button onClick={this.getBooksList} className="btn mb-2 mr-sm-2" style={styling.icon}>
                        <img src={search} height="25" />
                    </button>
                </div>
 
                {this.state.searched && <BookList books={this.state.books}  />}
               
            </div>
        );
    }
}

let styling = {
    heading : {
        color : "#333333",
        fontFamily : "Verdana",
        marginBottom : 20
    },
    icon : {
       
    }
}

export default SearchBook;