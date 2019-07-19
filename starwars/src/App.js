import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Header from "./components/Header";
import Menu from "./components/Menu";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination"



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const pagePrev = function () {
    if (page === 1) {
      return
    }
    return setPage(page - 1)
  }

  const pageNext = function () {
    if (page === 3) {
      return
    }
    
    return setPage(page + 1)
  }

  const [charArray, setCharArray] = useState([]) ;
  const [page, setPage] = useState(1)
  useEffect( () => {
    axios.get(`https://henry-mock-swapi.herokuapp.com/api?page=${page}`)
      .then((res) => {
        setCharArray(res.data)
      })
      .catch( err => console.log("Check out this error: ", err))
  }, [page]);

  return (
    <div className="App">
      <Header />
      <Pagination next={pageNext} prev={pagePrev}/>
      <CardContainer charArray={charArray}/>
      <Pagination next={pageNext} prev={pagePrev}/>
      <Footer />
    </div>
  );
}

export default App;
