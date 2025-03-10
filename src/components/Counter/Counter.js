import React from "react";
import CounterParent from "./CounterParent";


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0,
        }
        this.intervalId = null
       

       console.log('constructor');
    }

start(){
    this.intervalId = setInterval(()=>{
        const{count}=this.state
        this.setState({
             count: count +1
        })

    },1000)

}

  componentDidMount(){
    this.start()
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true
  }
  componentWillUnmount(){
    clearInterval(this.intervalId)
    console.log('componentWillUnmount');
  }

    render(){
        console.log('render');
       return(
        <>
        <h1>{this.state.count}</h1>
        
        </>
       )
    }


}

export default Counter