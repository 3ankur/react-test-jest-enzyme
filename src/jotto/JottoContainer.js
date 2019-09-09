import React from "react";
import GussedWords from "./GussedWords";
import Congrats from "./Congrats";
import InputC from "./input";
export default class JottoContainer extends React.Component{
    

    render(){
        return(
            <div>
                <h5>Welcome to jotto app</h5>
                <InputC />
                <Congrats />
                <GussedWords  guessedWords={[{
                    guessedWord:"train",
                    letterMatchCount:3
                }]}/>
            </div>
        )
    }
}