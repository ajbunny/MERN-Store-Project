const React = require("react");

class Index extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div id="index">
        <link rel="stylesheet" type="text/css" href="/css/index.css" />
          <img id="logo" src="/css/ariLogo.png" alt="Logo" />
        <p>
          Don't see what you're looking for? <br /> Click below to have Black
          Magic manifest the item you most desire✨
        </p>
        
        <nav>
        <button className="button-85" role={ "button" }>
          <a href="/store/New"> Manifest </a>
          </button>
        </nav>

        <ul>
          <div className="main">
            {store.map((item, i) => {
              return (
                <li>
                  <div className="list">
                    <div id="pic"> 
                  <img id="imgbd" src={item.img} ></img>
                  </div>
                  <div id="item"> 
                    <a href={`/store/${item.id}`}> {item.item}</a>
                    </div>
                    <br />
                    <button id="edit" className="button-85" role={ "button"}>
                      <a href={`/store/${item._id}/edit`}> Edit</a>
                      </button>
                    <br />
                    <form
                      action={`/store/${item._id}?_method=DELETE`}
                      method="POST"
                    >
                      <br />
                      <div id="delete"> 
                      <input type="submit" value="DELETE" />
                      </div>
                    </form>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    );
  }
}

module.exports = Index;
