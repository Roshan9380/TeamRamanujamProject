import React from 'react';
import { withRouter } from 'react-router-dom';


class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books : null
        }
    }

    componentDidMount() {
        this.setState({
            books : this.props.books
        });
        console.log("book list : " + this.props.books)
    }



    handleBook = (book) => {
        localStorage.setItem('plane', JSON.stringify(book));
        this.props.history.push('/order');
    }

    render() {
        if(!this.state.books)
            return null;
 
        const booklist = this.state.books.map(b => {
            return (
                <div className="card mr-4 mt-4" style={{width: 350, background: "blue"}}>
                    
                    <div className="card-header">
                        <h5>Book {b.bookId}</h5>
                    </div>
                    
                    <div className="card-body">
                    <div className="row mb-2">
                        <div className="col fw-bold">Book Name</div>
                        <div className="col">{b.bookName}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col fw-bold">Book Price</div>
                        <div className="col">{b.bookPrice}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col fw-bold">Available books</div>
                        <div className="col">{b.availableBooks}</div>
                    </div>  
                    <div className="row mb-2">
                        <div className="col fw-bold">Book Status</div>
                        <div className="col">{b.bookStatus}</div>
                    </div>    
                    
                    <br/>
                        <button className="btn btn-dark mr-3" onClick={() => this.handleBook(b)} >Book</button>
                    </div>
                                            
                </div>
            )
        });

        
        return (
            <div>
                <h4>Books Available</h4>
                <div style={styling.wrapper}>
                    {booklist}
                </div>
            </div>
            
        );
        
        
    }
}

let styling = { 
    wrapper : {
        display : "flex", 
        flexWrap: "wrap"
    }
}

export default withRouter (BookList);