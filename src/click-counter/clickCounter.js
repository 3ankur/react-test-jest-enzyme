import React from "react";

export default class ClickCounter extends React.Component{
     constructor(props){
         super(props);
        this.state={
            counter:0,
            notNegative:false
        };
     }

     updateCounter = ()=>{
        this.setState({counter:this.state.counter+1});
        if(this.state.counter==0){
            this.setState({notNegative:false});
        }
     }

     DecrementCounter = ()=>{
         if(this.state.counter!==0){
            this.setState({counter:this.state.counter-1});
         }else{
            this.setState({notNegative:true});
         }
     }
     render(){
         return(
            <div data-test="component-click-counter">
                <h1 data-test="counter-display">Click counter is {this.state.counter}</h1>
                { this.state.notNegative &&  <h5 data-test="error-display">Counter value can not be less then 0</h5>} 
                <button onClick={this.updateCounter} data-test="increment-button">Increment button</button>
                <button onClick={this.DecrementCounter} data-test="decrement-button">Decrement button</button>
            </div>
         );
     }
}
