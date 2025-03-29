import React, {Component} from "react";

/*
1. Компонента йде за данними
2. Компонента отримує данні і кладе їх в state
3. Компонента ділиться з даними з кимось іншим, хто знає, як треба відобразити ці данні
*/

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
this.props.loadData()
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
    return this.props.renderData(this.state)
  }
}

export default DataProvider;
