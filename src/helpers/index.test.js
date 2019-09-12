import {getLetterMatchedCount} from "./index"

describe("getLetterMatchCount",()=>{
    const secretWord = "party";
    test("Return the correct Count when not maching letter",()=>{
        const letterMatchCount = getLetterMatchedCount("bons",secretWord);
        expect(letterMatchCount).toBe(0);
    })

    test("Return the correct Count when 3 maching letter",()=>{
        const letterMatchCount = getLetterMatchedCount("train",secretWord);
        expect(letterMatchCount).toBe(3);
    })

    test("Return the correct Count when duplicate maching letter",()=>{
        const letterMatchCount = getLetterMatchedCount("parka",secretWord);
        expect(letterMatchCount).toBe(3);
    })
})