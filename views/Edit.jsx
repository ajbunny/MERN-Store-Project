const React = require('react');

class Edit extends React.Component{
    render() {
      return (
     <div id='edit'>
      <img id="logo" src="/css/ariLogo.png" alt="Logo" />
      <div id="container">
         <link rel="stylesheet" type="text/css" href="/css/edit.css"/>
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
            
            <form action={`/store/${this.props.store._id}?_method=PUT`} method="POST">
            Item: <input type="text" name="item" defaultValue={this.props.store.item}/><br/>
            Color: <input type="text" name="color"  defaultValue={this.props.store.color}/><br/>
            Quantity:<input type="text" name="quantity" defaultValue={this.props.store.quantity}/><br/>
            Price:<input type="text" name="price" defaultValue={this.props.store.price}/><br/>
            Image:<input type="text" name="img" defaultValue={this.props.store.img}/><br/>
            <p>Instructions: Please search & copy a JPG image of your desire</p>
             <input type="submit" value="Submit Changes"/>
             <button>
           <a href="/store/"> Back</a>
        </button>
        </form>
        
        </div>
        
       
        </div>
      )
    }
  }
  module.exports= Edit;
