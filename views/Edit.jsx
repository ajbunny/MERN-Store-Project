const React = require('react');

class Edit extends React.Component{
    render() {
      return (
     <div>
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
            <form action={`/store/${this.props.store._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={this.props.store.name}/><br/>
            Img: <input type="text" name="color"  defaultValue={this.props.store.img}/><br/>
           
            <br/>
            <input type="submit" value="Submit Changes"/>
        </form>
        <a href="/store/"> Back</a>
        </div>
      )
    }
  }
  module.exports= Edit;
