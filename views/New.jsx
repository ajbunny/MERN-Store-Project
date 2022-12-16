const mongoose = require("mongoose");
const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="/css/new.css" />
        <h1>Manifest a New Item</h1>
        <form action="/store" method="POST">
          Item: <input type="text" name="item" />
          <input type="submit" name="" value="Universe has Received" />
          <br />
          Color: <input type="text" name="color" />
          <br />
          Quantity:
          <input type="text" name="quantity" />
          <br />
          Price:
          <input type="text" name="price" />
          <br />
          Img:
          <input type="text" name="img" />
          <br />
        </form>
        <nav>
          <a href="/store"> BACK</a>
        </nav>
      </div>
    );
  }
}

module.exports = New;
