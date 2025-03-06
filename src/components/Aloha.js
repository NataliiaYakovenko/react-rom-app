import React from "react";

class Aloha extends React.Component{
    constructor(props){
        super(props);
         this.state = {
            //1 створити змінну стейту (за прикладом лампочки true/false)
            isGreeting: true
        }
    }
     // 2 зробити обробник події кліку на h1 (за прикладом лампочки)
      changeGreetHandler(){
        this.setState({
            isGreeting:!this.state.isGreeting
        })

        
      }


     render(){
        //3 в залежності від значення стейту, вирахувати, що за текс ви показуєте (за прикладом лампочки)
        const greetChange = this.state.isGreeting ? 'Hello' : "Bye"

        return <h1 onClick={()=>{this.changeGreetHandler()}}>{greetChange} {this.props.name}</h1>

        //не забудьте підписати h1 на обробник кліку розроблений у пункті 2
     }
}

export default Aloha;

/*
Доробити компоненту таким чином, 
щоб за натисканням на h1 текст Hello змінюється на Bye


*/