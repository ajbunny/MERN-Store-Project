const mongoose = require("mongoose");
const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div id="new">
        <link rel="stylesheet" type="text/css" href="/css/new.css" />

        <img id="logo" src="/css/ariLogo.png" alt="Logo" />
        <h1>Manifest a New Item</h1>
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
          <br /> <br />
          <input type="submit" name="" value="Universe has Received" />
          <br />
          <button>
            <a href="/store"> BACK</a>
          </button>
        </form>
      </div>
    );
  }
}

module.exports = New;
