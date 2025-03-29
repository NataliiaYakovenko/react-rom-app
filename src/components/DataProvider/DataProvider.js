import React, {Component} from "react";

class DataProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount = () => {
    this.load();
  };

  load = () => {
    const {url}= this.props
    fetch (url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data: data,
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
    const { data, isLoading, isError } = this.state;
    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error...{isError.message}</div>}

        <ul>
          {data.map((data) => {
            return (
              <li>
                Brand: {data.brand}--- Model: {data.model}--- Price: {data.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DataProvider;
