import React from "react";
import {shallow} from "enzyme";
import GussedWords from "./GussedWords";
import {findByTestAttr,checkProps} from "../../test/testUtils";

const defaultProps = {
    guessedWords:[{guessedWord:'train',letterMatchCount:3}]
};

const setup = (props={})=>{
     const setupProps = {...defaultProps,...props};
      return shallow(<GussedWords {...setupProps} />);
}


test("does not throw warning with expected props",()=>{
    checkProps(GussedWords,defaultProps);
})

describe('If there are no words gussed',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper  = setup({guessedWords:[]})
    })
 test("render without error",()=>{
     
     const component = findByTestAttr(wrapper,"component-guessed-word");
     expect(component.length).toBe(1);
 });

 test("Renders instruction to guess a word",()=>{
    const instructions = findByTestAttr(wrapper,"component-instruction");
     expect(instructions.text()).not.toBe(0);
 })
})

describe('If there are words gussed',()=>{

    const guessedWords = [{guessedWord:"train",letterMatchCount:3},
    {guessedWord:"agile",letterMatchCount:1},    
    {guessedWord:"party",letterMatchCount:5}, 
];

let wrapper;
    beforeEach(()=>{
        wrapper  = setup({guessedWords});
    });

    test("render without error",()=>{
        const component = findByTestAttr(wrapper,"component-guessed-word");
        expect(component.length).toBe(1);
    })

    test("render guessed words section",()=>{
        const guessedWorsdNode = findByTestAttr(wrapper,"guessed-words");
        expect(guessedWorsdNode.length).toBe(1);
    });

    test("correct number of  guessed words",()=>{
        const guessedWorsdNodes = findByTestAttr(wrapper,"guessed-word");
        expect(guessedWorsdNodes.length).toBe(guessedWords.length);
    });

    
})
