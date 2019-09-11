import React from "react";
import ButtonClickCounter from "./ButtonClickCounter";
import HoverCounter from "./HoverCounter";
export default class ContainerComponent extends React.Component{
    
render(){
        return(
            <div>
                <ButtonClickCounter age={28} />
                <HoverCounter age={28} />
            </div>
        );
    }
}