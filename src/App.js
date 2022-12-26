import React from 'react';
import './App.css';
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import MyButton from "./components/button";
function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <MyButton/>
      <Footer />
      
    </div>
  );
}

export default App;

