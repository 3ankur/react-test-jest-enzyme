import {storeFactory} from "../test/testUtils";
import {guessWord} from "./actions";

describe("guessWord Action dispatcher",()=>{
    const secretWord = "party";
    describe("No guess words",()=>{
        const unsuccesfullWord = "train";
        const  initialState = {secretWord};
        let store;

        beforeEach(()=>{
            store = storeFactory(initialState);
        })
        test("Update state correctly when unsuccesfull gues",()=>{
            store.dispatch(guessWord(unsuccesfullWord));
            const newState = store.getState();
            console.log(newState)
            const exprectedState = {
                ...initialState,
                success:false,
                guessedWords:[ { gussedWord:unsuccesfullWord,letterMatchedCount:3}]
            };
            expect(newState).toEqual(exprectedState);
        })

        test("Update state correctly when succesfullgues",()=>{

        })
     });

     describe("Some guess words",()=>{
        test("Update state correctly when unsuccesfull gues",()=>{

        })

        test("Update state correctly when succesfullgues",()=>{

        })
     })
});