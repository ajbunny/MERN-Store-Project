const React = require("react");

class Show extends React.Component {
  render() {
    const { store } = this.props;

    const renderForm = () => {
      if (store.quantity > 0) {
        return (
          <form
            action={`/store/${this.props.store._id}?_method=PUT`}
            method="POST"
          >
            <input type="hidden" name="item" defaultValue={store.item} />
            <br />
            <input type="hidden" name="color" defaultValue={store.color} />
            <br />
            <input
              type="hidden"
              name="quantity"
              defaultValue={store.quantity - 1}
            />{" "}
            <br />
            <input type="hidden" name="price" defaultValue={store.price} />
            <br />
            <input type="hidden" name="img" defaultValue={store.img} />
            <br />
            <input type="submit" value="Buy" />
            <h2>Quantity:{store.quantity}</h2>
          </form>
        );
      } else {
        return <h3>"Out of Stock"</h3>;
      }
    };
    return (
      <div id="show">
        <link rel="stylesheet" type="text/css" href="/css/show.css" />
        <h1>What a Magical Choice✨</h1>
        <img src={store.img}></img>
        <h2>Item:{store.item}</h2>
        <h2>Price:${store.price}</h2>
        <div id="form">
        <form
          action={`/store/${this.props.store._id}?_method=PUT`}
          method="POST"
        >
          <input type="hidden" name="item" defaultValue={store.item} />
          <br />
          <input type="hidden" name="color" defaultValue={store.color} />
          <br />
          <input
            type="hidden"
            name="quantity"
            defaultValue={store.quantity - 1}
          />{" "}
          <br />
          <input type="hidden" name="price" defaultValue={store.price} />
          <br />
          <input type="hidden" name="img" defaultValue={store.img} />
          <br />
        </form>
        {renderForm()}
        
        
          <button><a href="/store/"> Back</a> </button>
        </div>
      </div>
    );
  }
}

module.exports = Show;
