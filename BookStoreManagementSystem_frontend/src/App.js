import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Order from './components/Order';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import ErrorMsg from './components/ErrorMsg';
import Admin from './components/Admin';
import AddBook from './components/AddBook';
import AllBooks from './components/AllBooks';
import UpdateBook from './components/UpdateBook';


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/order" component={Order} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/payment" component={Payment} />
        <Route path="/admin" component={Admin} />
        <Route path="/addBook" component={AddBook} />
        <Route path="/allBooks" component={AllBooks} />
        <Route path="/updateBook" component={UpdateBook} />
        <Route path="/errorMsg" component={ErrorMsg} />
      
      </Switch>
    </main>
  );
}

export default App;
