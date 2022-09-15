import React from 'react';
import book from '../assets/images/travel1.jpg';
import Header from './Header';
import BookService from '../services/BookService';

class AddBook extends React.Component {
    constructor(props){
        super(props);
        
        if(!localStorage.getItem('customer')){
            alert('Please Login')
            this.props.history.push('/login')
        }
        else{
            if(JSON.parse(localStorage.getItem('customer')).isadmin === 1 ){
            this.service = new BookService();
            this.state = {
                bookName : undefined,
                bookPrice: undefined,
                bookStatus: undefined,
                availableBooks: 0
            }
        }
        else{
            alert('Access Denied')
            this.props.history.push('/')
        }

    }
        
}

handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]:value
    })
}

onSave = (e) => {
    e.preventDefault();
    const book = this.state;
    console.log(book);
    this.service.saveBook(book);
    alert("The book has been added");
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
        <Header />
    
    <div className="container-fluid" style={styling.wrapper}>
        
        <form className="m-auto mt-3 m-1 border bg-white border-light p-3" onSubmit={this.onSave}
         style={styling.formStyle}>
            <h1 className="mb-3" style={styling.heading}>Add New Book</h1>
            
            <div className="input-group mb-2 mr-sm-2">    
                <label className="col-4 my-1 p-1 bg-light border border-darken-2">Book Name</label>
                <input type="text" className="col-5 my-1 p-1 border border-darken-2" value={this.state.bookName}
                 name="bookName" onChange={this.handleInput}  required />
            </div>

            <div className="input-group mb-2 mr-sm-2">    
                <label className="col-4 my-1 p-1 bg-light border border-darken-2">Book Price</label>
                <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.bookPrice}
                 name="bookPrice" onChange={this.handleInput}  required />
            </div>
            
            <div className="input-group mb-2 mr-sm-2">    
                <label className="col-4 my-1 p-1 bg-light border border-darken-2">Book Status</label>
                <input type="text" className="col-5 my-1 p-1 border border-darken-2" value={this.state.bookStatus}
                 name="bookStatus" onChange={this.handleInput}  required />
            </div>

            <div className="input-group mb-2 mr-sm-2">    
                <label className="col-4 my-1 p-1 bg-light border border-darken-2">Available Books</label>
                <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.availableBooks}
                 name="availableBooks" onChange={this.handleInput}  required />
            </div>
            
            <button type="submit" className="btn btn-warning mr-4">Add</button>
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
    paddingTop : 100,
    paddingBottom : 100
},
heading : {
    color : "#333333",
    textAlign: "center"
},
formStyle : {
    minWidth: 400, 
    maxWidth: 600
}
}

export default AddBook;
    