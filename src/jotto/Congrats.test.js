import React from "react";
import {shallow} from "enzyme";
import Congrats from "./Congrats";
import {findByTestAttr,checkProps} from "../../test/testUtils";

const defaultProps = {success:false};

/** 
 * 
 * 
*/
const setup = (props={})=>{
    const setupProps = {...defaultProps,...props};
return shallow(<Congrats {...setupProps} />);
}

test("Render without crash",()=>{
 const wrapper = setup();
 const component = findByTestAttr(wrapper,"component-congrats");
 expect(component.length).toBe(1);
});

test("Render No message when success props is false",()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper,"component-congrats");
    expect(component.text()).toBe("");
});

test("Render non empty congrats message when success props is true",()=>{
    const wrapper = setup({success:true});
    const component = findByTestAttr(wrapper,"congrats-message");
    expect(component.text().length).not.toBe(0);
});

test("Does not throw warning with expected props type",()=>{
    const expectedProps = {success:true};
    checkProps(Congrats,expectedProps);
});