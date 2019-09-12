import {getLetterMatchedCount} from "../helpers/index";
export const  actionTypes = {
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD"
};

// export  function  correctGuess(){
//     return {
//         type:actionTypes.CORRECT_GUESS
//     };
// }

export const guessWord =(gussedWord) =>{
    return function(dispatch,getState){
            const secretWord = getState().secretWord;
            const letterMatchedCount = getLetterMatchedCount(gussedWord,secretWord);
            dispatch({
                type:actionTypes.GUESS_WORD,
                payload:{gussedWord,letterMatchedCount}
            });

            if(gussedWord===secretWord){
                dispatch({
                    type:actionTypes.CORRECT_GUESS,
                });
            }

        //getLetterMatchedCount
    }
}