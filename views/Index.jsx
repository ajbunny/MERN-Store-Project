const React = require("react");

class Index extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div id="index">
        <link rel="stylesheet" type="text/css" href="/css/index.css" />

        <p>
          Don't see what you're looking for? <br /> Click below to have Black
          Magic manifest the item you most desire✨
        </p>
        <img id="logo" src="/css/ariLogo.png" alt="Logo" />
        <nav>
          <a href="/store/New"> Insert Item </a>
        </nav>

        <ul>
          <div className="main">
            {store.map((item, i) => {
              return (
                <li>
                  <div className="list">
                  <img src={store.img}></img>
                    <a href={`/store/${item.id}`}> {item.item}</a>
                    <br />
                    <button>
                      <a href={`/store/${item._id}/edit`}> Edit</a>
                      </button>
                    <br />
                    <form
                      action={`/store/${item._id}?_method=DELETE`}
                      method="POST"
                    >
                      <br />
                      <input type="submit" value="DELETE" />
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
