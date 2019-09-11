import React from "react";
import withClickComponent from "./hocWithCounter";
class ButtonClickCounter extends React.Component{
  

    render(){
        const {count,incrementCount,age} = this.props;
        return (
            <div>{this.props.name} - {age}
            <button onClick={incrementCount}>Click Count {count}</button>
        </div>
        );
    }
}

export default  withClickComponent(ButtonClickCounter);