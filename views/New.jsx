const mongoose = require("mongoose");
const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Manifest a New Item</h1>
        <form action="/store" method="POST">
          Name: <input type="text" name="name" />
          <input type="submit" name="" value="Universe has Received" />
        </form>
        <nav>
          <a href="/store"> BACK</a>
        </nav>
      </div>
    );
  }
}

module.exports = New;