import React from 'react';
// Components
import Header from "./components/layout/Header"
import Hero from "./components/Hero"
import Video from "./components/Video"
import Products from "./components/Products"
import Blog from "./components/Blog"
import BlogMinor from "./components/BlogMinor"
import Contact from "./components/Contact"
import Company from "./components/Company"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="App wrapper-container">
      <Header />
      <Hero />
      <Video />
      <Products />
      <Blog />
      <BlogMinor />
      <Contact />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
