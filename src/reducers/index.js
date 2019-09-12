import {combineReducers} from "redux";
import success from "./sucessReducer";
import guessedWords from "./guessWordReducer";
import secretWord from "./secretWordReducer";
export default combineReducers({
    success,
    guessedWords,
    secretWord
});