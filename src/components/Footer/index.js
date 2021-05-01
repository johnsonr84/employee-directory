import React from "react";
import './footer.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Footer() {
  return (
      <footer>
        <ul>
          <li>
            Random employees generated with <a href="https://randomuser.me/">Random User Generator API</a>
          </li>
        </ul>
      </footer>

  );
}

export default Footer;
