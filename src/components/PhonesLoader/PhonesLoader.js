import React, {Component} from "react";

class PhonesLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount = () => {
    this.load();
  };

  load = () => {
    fetch ("./phones.json")
      .then(response => response.json())
      .then((phones) => {
        this.setState({
          phones: phones,
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
    const { phones, isLoading, isError } = this.state;
    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error...{isError.message}</div>}

        <ul>
          {phones.map((phone, index) => {
            return (
              <li key={index}>
                Brand: {phone.brand}--- Model: {phone.model}--- Price: {phone.price}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PhonesLoader;
