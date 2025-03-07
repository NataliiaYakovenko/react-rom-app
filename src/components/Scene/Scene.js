//батьківський компонент

import React from "react";
import Toggler from "./Toggler";
import Indicator from "./Indicator";
import './Scene.css'

class Scene extends React.Component {
  constructor(props){
    super(props);
    this.state={
        isLight: true,
       
    }
  }

  toggleScene=()=>{
    this.setState({
        isLight: !this.state.isLight
    })
  }

  render() {
    const{isLight}=this.state
    return (<>
     <div className={isLight ? "scene-on" : "scene-off"}>
    <Toggler changeParentState={this.toggleScene} buttonText={isLight ? 'Off' : 'On'}/>
    <Indicator text={isLight ? "light is on": "light is off"}/>
    </div>
    </>
    )
  }
}

export default Scene;

/*
Батьківський елемент може вліяти на дочірній через props
Дочирній елемент може передавати до батьківського через callback
callback patern


*/