import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Home from './pages/Home';
import Stripe from './pages/Stripe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Success from './components/Success';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product-list">
          <ProductList />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/stripe">
          <Stripe />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
