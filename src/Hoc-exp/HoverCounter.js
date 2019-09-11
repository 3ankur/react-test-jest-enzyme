import React from "react";
import withClickComponent from "./hocWithCounter";
class HoverCounter extends React.Component{
   render(){
       const {count, incrementCount} = this.props;
        return (
            <div>
            <h4 onMouseOver={incrementCount}>Hover Count {count}</h4> 
        </div>
        );
    }
}

export default withClickComponent(HoverCounter);