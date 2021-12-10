import './App.css';
import { Redirect,Route,Switch } from 'react-router-dom'
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';


function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Product}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect />
    </Switch>
    </>
  );
}

export default App;
