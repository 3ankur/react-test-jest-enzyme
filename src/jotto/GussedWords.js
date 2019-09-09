import React from "react";
import PropTypes from "prop-types";
const GussedWords = (props)=>{
    let contents ;
    if(props.guessedWords.length===0){
        contents = (
            <span data-test="component-instruction">
                Try to guess the secret the word!
            </span>
        )
    }else{
        contents = (
            <div data-test="guessed-words">
                <h4>Geussed Words</h4>
                <table>
                    <tr>
                        <th>
                            Geuss
                        </th>
                        <th>
                            Matching letters
                        </th>
                    </tr>
                </table>
                <tbody>
                    {
                        props.guessedWords.map((word,idx) =>{
                            return (
                                <tr key={idx} data-test="guessed-word">
                                    <td>{word.guessedWord}</td>
                                    <td>{word.letterMatchCount}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </div>
        );
    }
    return (
        <div data-test="component-guessed-word">
            {contents}
        </div>
    );
}
GussedWords.propTypes ={
 guessedWords:PropTypes.arrayOf(
     PropTypes.shape({
         guessedWord:PropTypes.string.isRequired,
         letterMatchCount:PropTypes.number.isRequired
     })
 ).isRequired
}

export default GussedWords;