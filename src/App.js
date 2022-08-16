import React from 'react';
import Info from "../src/components/Info";
import About from "../src/components/About";
import Interest from "../src/components/Interests";
import Footer from "../src/components/Footer";
import "./App.css";

export default function App() {
  return(
      <div>
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
      </div>
  )
}