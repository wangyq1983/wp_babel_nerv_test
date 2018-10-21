// const config = require('./config.json')

// module.exports = function() {
//     var greet = document.createElement('div');
//     // greet.textContent = "Hi there and greetings!";
//     greet.textContent = config.greetText;
//     return greet;
// };

import React, { Component } from "react";
import config from "./config.json";

class Greeter extends Component {
  render() {
    var txtInfo = "this is react_nerv";
    return (
      <div>
        {txtInfo}
        {config.greetText}
      </div>
    );
  }
}

export default Greeter;
