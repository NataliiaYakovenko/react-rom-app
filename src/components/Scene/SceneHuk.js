import React,{useState} from 'react'
import Toggler from "./Toggler";
import Indicator from "./Indicator";
import './Scene.css'

function SceneHuk() {
 const [isLight, setIsLight]=useState(true)

const toggleScene=()=>{
   setIsLight(!isLight)
  }


  return (<>
     <div className={isLight ? "scene-on" : "scene-off"}>
    <Toggler changeParentState={toggleScene} buttonText={isLight ? 'Off' : 'On'}/>
    <Indicator text={isLight ? "light is on": "light is off"}/>
    </div>
    </>
    )
}

export default SceneHuk