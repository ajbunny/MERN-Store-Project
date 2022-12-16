const React = require("react");

class Index extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div id="index">
        <link rel="stylesheet" type="text/css" href="/css/index.css"/>

        <p>
          Don't see what you're looking for? Click below to have Bunny's Magic manifest the item you most desire✨
        </p>
        <nav>
          <a href="/store/New"> Insert Item </a>
        </nav>
        <ul>
          {store.map((item, i) => {
          
            return (
              <li>
                <a href={`/store/${item.id}`}>
                  {" "}
                {item.item}
                </a>
                <br />
                <a href={`/store/${item._id}/edit`}> Edit</a>
                <br />
                <form
                  action={`/store/${item._id}?_method=DELETE`}
                  method="POST"
                >
                  <br />
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
