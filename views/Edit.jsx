const React = require('react');

class Edit extends React.Component{
    render() {
      return (
     <div>
         <link rel="stylesheet" type="text/css" href="/css/edit.css"/>
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
            <form action={`/store/${this.props.store._id}?_method=PUT`} method="POST">
            Item: <input type="text" name="item" defaultValue={this.props.store.item}/><br/>
            Color: <input type="text" name="color"  defaultValue={this.props.store.color}/><br/>
            Quantity:<input type="text" name="quantity" defaultValue={this.props.store.quantity}/><br/>
            Price:<input type="text" name="price" defaultValue={this.props.store.price}/><br/>
            Img:<input type="text" name="img" defaultValue={this.props.store.img}/><br/>

             <input type="submit" value="Submit Changes"/>
        </form>
        <a href="/store/"> Back</a>
        </div>
      )
    }
  }
  module.exports= Edit;
