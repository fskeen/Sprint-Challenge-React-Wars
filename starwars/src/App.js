import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Header from "./components/Header";
import Menu from "./components/Menu";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charArray, setCharArray] = useState([]) ;
  useEffect( () => {
    axios.get(`https://henry-mock-swapi.herokuapp.com/api`)
      .then((res) => {
        console.log(res)
        setCharArray(res.data)
      })
      .catch( err => console.log("Check out this error: ", err))
  }, []);



  return (
    <div className="App">
      <Header />
      <Menu />
      <CardContainer charArray={charArray}/>
      <Footer />
    </div>
  );
}

export default App;
