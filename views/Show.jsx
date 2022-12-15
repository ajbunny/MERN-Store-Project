const React = require("react");

class Show extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <h1>What a Magical Choice✨</h1>

        <img src={store.img}></img>
        <a href="/store/"> Back</a>
      </div>
    );
  }
}

module.exports = Show;
