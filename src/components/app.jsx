import React from 'react';
import Header from './header';
import Home from './home';
import Work from './work';
import About from './about';
import Contact from './contact';
import Footer from './footer';

const App = () => {

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
