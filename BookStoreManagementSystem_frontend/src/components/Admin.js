import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import OrderDetails from "../assets/logo/plane-ticket.png";
import book from '../assets/images/travel1.jpg';
import Header from './Header';


function Admin(props) {
    const history = useHistory();

    if(!localStorage.getItem('customer') || JSON.parse(localStorage.getItem('customer')).isadmin === 0  )
    {
        return  alert('Access Denied'),history.push('/'),null
    }

    else{
    return (
        <div style={{paddingTop : 70}}>
            <Header />
        <div className="p-3" style={styling.wrapper}>
            
            <div className="card m-auto" style={{width: "23rem"}}>
                <img className="card-img-top m-auto mt-3 w-50" src={OrderDetails} alt="admin" />
                <div className="card-body">
                    <h5 className="card-title">Welcome </h5>
                    <p className="card-text">As Seller you can add books, modify and delete the books </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link className="card-link" to="/addBook">Add Books</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="card-link" to="/allBooks">All Book</Link>
                    </li>
                    <li className="list-group-item"></li>
                </ul>
            </div>
            
        </div>
        </div>
    );
    }
};

let styling = {
    wrapper : {
        height : "80vh",
        background: `url(${book})`
    }
}

export default Admin;