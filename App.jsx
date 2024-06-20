// App.jsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './navbar.jsx'; // Corrected import path for Navbar
import Footer from './footer.jsx'; // Corrected import path for Footer
import Home from './home.jsx'; // Corrected import path for Home
import About from './about.jsx'; // Corrected import path for About
import Products from './product.jsx'; // Corrected import path for Products
import Contact from './contact.jsx'; // Corrected import path for Contact
import Prebook from './prebook.jsx'; // Corrected import path for Prebook
import Product1 from './product1.jsx'; // Corrected import path for Product1
import Product2 from './product2.jsx'; // Corrected import path for Product2
import Product3 from './product3.jsx'; // Corrected import path for Product3
import CompareAll from './compareAll.jsx'; // Corrected import path for CompareAll
import Rentals from './rentals.jsx'; // Corrected import path for Rentals
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="react-app/src/home.jsx" component={Home}/>
                    <Route path="react-app/src/about.jsx" component={About}/>
                    <Route path="react-app/src/product.jsx" component={Products}/>
                    <Route path="react-app/src/contact.jsx" component={Contact}/>
                    <Route path="react-app/src/prebook.jsx" component={Prebook}/>
                    <Route path="react-app/src/product1.jsx" component={Product1}/>
                    <Route path="react-app/src/product2.jsx" component={Product2}/>
                    <Route path="react-app/src/product3.jsx" component={Product3}/>
                    <Route path="react-app/src/compareAll.jsx" component={CompareAll}/>
                    <Route path="react-app/src/rentals.jsx" component={Rentals}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
