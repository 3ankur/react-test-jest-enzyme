import React from "react";
import {Provider} from 'react-redux'
import {shallow} from "enzyme";
import Input from "./input";
import { storeFactory,findByTestAttr } from "../../test/testUtils";


const setup =(initialState)=>{
const store = storeFactory(initialState);
//console.log(initialState);

const wrapper = shallow(<Input store={store} />).dive().dive();//somehow its not returnchildren so did dive again
return wrapper;
}

describe("render",()=>{

    describe("render when word not guessed the word",()=>{
        let wrapper;
    beforeEach(()=>{
        const initialState = {success:false};
        wrapper  = setup(initialState);
    });
        test("render without error",()=>{
            console.log(wrapper.debug());
            const component = findByTestAttr(wrapper,"component-input")
            expect(component.length).toBe(1);
        })
        test("Render input ",()=>{
            const componentInput = findByTestAttr(wrapper,"input-box")
            expect(componentInput.length).toBe(1);
        })
        
        test("Render submit button ",()=>{
            const componentSubmitBtn = findByTestAttr(wrapper,"submitButton")
            expect(componentSubmitBtn.length).toBe(1);
        })
    });

    describe("render when word has beed guessed",()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState= {success:true};
            wrapper  = setup(initialState);
        })
        test("render without error",()=>{
            console.log(wrapper.debug());
            const component = findByTestAttr(wrapper,"component-input")
            expect(component.length).toBe(1);
        })
        test("does not render input ",()=>{
            const componentInput = findByTestAttr(wrapper,"input-box")
            expect(componentInput.length).toBe(0);
        })
        
        test("does not render submit button ",()=>{
            const componentSubmitBtn = findByTestAttr(wrapper,"submitButton")
            expect(componentSubmitBtn.length).toBe(0);
        })
    })
})
