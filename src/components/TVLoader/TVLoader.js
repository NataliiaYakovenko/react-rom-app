import React, {Component} from "react";

class TVLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tv: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount = () => {
    this.load();
  };

  load = () => {
    fetch ("./tv.json")
      .then(response => response.json())
      .then((tv) => {
        this.setState({
          tv: tv,
        })
      })
      .catch((err) => {
        this.setState({
          isError: err,
        })
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        })
     } );
  };

  render() {
    const { tv, isLoading, isError } = this.state;
    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error...{isError.message}</div>}

        <ul>
          {tv.map((tv) => {
            return (
              <li>
                Brand: {tv.brand}--- Model: {tv.model}--- Price: {tv.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TVLoader;
