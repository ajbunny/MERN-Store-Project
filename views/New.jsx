const mongoose = require("mongoose");
const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div id="new">
        <link rel="stylesheet" type="text/css" href="/css/new.css" />

        <img id="logo" src="/css/ariLogo.png" alt="Logo" />
        <h1>Manifest a New Item</h1>
        
        <div id="container"> 
        
        <form action="/store" method="POST">
          Item: <input type="text" name="item" />
          <br />
          Color: <input type="text" name="color" />
          <br />
          Quantity:
          <input type="text" name="quantity" />
          <br />
          Price:
          <input type="text" name="price" />
          <br />
          Image:
          <input type="text" name="img" />
          <p>Instructions: Please search & copy a JPG image of your desire</p>
          <br /> <br />
         <div className="button-85">
          <input type="submit" name=""className="button-85" role={ "button" } value="Universe has Received" />
         </div>
          <br />
          <button>
            <a href="/store"> Back</a>
          </button>
        </form>
        </div>

      </div>
    );
  }
}

module.exports = New;
