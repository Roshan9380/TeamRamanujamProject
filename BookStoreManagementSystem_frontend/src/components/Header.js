import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo/travelling.png';


function Header(props) {
    const history = useHistory();
    const bookcustomer = localStorage.getItem('customer');

    
    const loggedIn = (
        
            <ul className="nav justify-content-end">
             <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button className="btn btn-outline-light">Home</button>
                </Link>
            </li>
                <li className="nav-item">
                <Link className="nav-link text-info" to="/login">
                    <button className="btn btn-outline-light">Login</button>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-info" to="/register">
                    <button className="btn btn-outline-light">Register</button>
                </Link>
                </li>
            </ul>
        
    );

    const customerClear = () => (
        localStorage.removeItem('customer'),
        localStorage.removeItem('book'),
        localStorage.removeItem('bid'),
        localStorage.removeItem('sid'),
        localStorage.removeItem('orderDetails'),
        localStorage.removeItem('nop'),
        localStorage.removeItem('orderDetail'),
        localStorage.clear()
    )

    
    const onOrderDetails= () => {
       history.push('/orderdetail')
    }

   
    const loggedOut = (
            <ul className="nav justify-content-end">
                {}
               

                <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button className="btn btn-outline-light">Home</button>
                    </Link>
                </li>
                { localStorage.getItem('customer') && JSON.parse(localStorage.getItem('customer')).isadmin ===0 
                &&  
                    <li className="nav-item nav-link text-info">
                            <button onClick={onOrderDetails} className="btn btn-outline-light">OrderHistory</button>
                    </li>
                }

                {localStorage.getItem('customer') && JSON.parse(localStorage.getItem('customer')).isadmin ===1 
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/addBook">
                        <button className="btn btn-outline-light">Add Book</button>
                    </Link>
                </li>}


                {localStorage.getItem('customer') && JSON.parse(localStorage.getItem('customer')).isadmin ===1
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/allBooks">
                        <button className="btn btn-outline-light">All Books</button>
                    </Link>
                </li>
                }

                <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button onClick={customerClear} className="btn btn-outline-light">Logout</button>
                    </Link>
                </li>

                { localStorage.getItem('customer') && JSON.parse(localStorage.getItem('customer')).isadmin ===0 
                &&  
                <li className="nav-item nav-link text-info">
                    <h6 style={{marginTop:'7px'}}><b className='text-warning'>Welcome, {JSON.parse(localStorage.getItem('customer')).customerName}</b></h6>
                </li>
                }

                
                {localStorage.getItem('Customer') && JSON.parse(localStorage.getItem('Customerer')).isadmin ===1
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/admin">
                        <button className="btn btn-outline-info">Admin</button>
                    </Link>
                </li>
                }


            </ul>
    );
    

    return (
        <div>
            <nav className="navbar navbar-dark bg-nav fixed-top" style={navstyle.bg}>
                <div className="container-fluid">
                    <Link style={navstyle.navbar_brand} to="/">
                        Book Store Management
                    </Link>
                       

                    { localStorage.getItem('customer')  ? loggedOut : loggedIn  }
                    {}
                   
                </div>
            </nav>
        </div>
    );
};

let navstyle = {
    bg : {
        backgroundColor : "grey",
    },
    navbar_brand : {
        color: "#ffffff",
        fontSize: "x-large",
        fontFamily: "Verdana",
        fontStyle: "bold",
        textDecoration: "none"
    }

}

export default Header;