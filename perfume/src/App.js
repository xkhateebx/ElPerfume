import './App.css';
import {Router, Redirect} from "@reach/router";
import AdminPage from './views/AdminPage';
import AddForm from './components/AddForm';
import Navbar from './Navbar';
import Footer from './Footer';
import Reviews from './Reviews';
import Product from './Product';
import AboutPage from './views/AboutPage';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './views/ServicesPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        {/* <AddForm path="/"/> */}
        <Hero path="/" />
        <AdminPage path="/admin"/>
        <Product path="/products" />
        <AboutPage path="/aboutus" />
        
        
      </Router>
     

      <Footer/>
    
    </div>
  );
}


export default App;
