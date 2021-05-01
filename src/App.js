import React, { useState } from "react";
import API from './utils/API';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [dataValue, setDataValue] = useState('');

    const handleOnChange = e => {
      setDataValue('')
      setInputValue(e.target.value);
    };
    
    const handleClick = e => {
      e.preventDefault();
      if(inputValue) {
        setDataValue(dataValue.filter(person => {
            return person.name.toLowerCase().includes(inputValue.toLowerCase().trim())
        }))
      setInputValue('');
      }
    };

   

  return (
    <>
      <Header title="Employee Directory" />
      <Search inputValue={inputValue} handleInputChange={handleOnChange} handleClick={handleClick} />
      <Footer />
   </>
  
  );
}

export default App;
