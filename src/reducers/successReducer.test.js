import { actionTypes } from "../actions";
import successReducer from "./sucessReducer";

test("return default initial state to false when no action is passed",()=>{
    const recieveState = successReducer(undefined,{});
    expect(recieveState).toBe(false);
})

test("return state if true upon receving an action of type 'CORRECT_GUESSS'",()=>{
    const newState = successReducer(undefined,{type:actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});