import React from "react";
import './header.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Header({ title }) {
  return (

      <h1>{title}</h1>

  );
}

export default Header;
