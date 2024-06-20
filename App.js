// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar.js'; // Corrected import path for Navbar
import Footer from './footer.js'; // Corrected import path for Footer
import Home from './home.js'; // Corrected import path for Home
import About from './about.js'; // Corrected import path for About
import Products from './product.js'; // Corrected import path for Products
import Contact from './contact.js'; // Corrected import path for Contact
import PreBook from './prebook.js'; // Corrected import path for PreBook
import Product1 from './product1.js'; // Corrected import path for Product1
import Product2 from './product2.js'; // Corrected import path for Product2
import Product3 from './product3.js'; // Corrected import path for Product3
import CompareAll from './compareAll.js'; // Corrected import path for CompareAll
import Rentals from './rentals.js'; // Corrected import path for Rentals

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="react-app/src/home.js" component={Home} />
          <Route path="react-app/src/about.js" component={About} />
          <Route path="react-app/src/product.js" component={Products} />
          <Route path="react-app/src/contact.js" component={Contact} />
          <Route path="react-app/src/prebook.js" component={PreBook} />
          <Route path="react-app/src/product1.js" component={Product1} />
          <Route path="react-app/src/product2.js" component={Product2} />
          <Route path="react-app/src/product3.js" component={Product3} />
          <Route path="react-app/src/compareAll.js" component={CompareAll} />
          <Route path="react-app/src/rentals.js" component={Rentals} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
