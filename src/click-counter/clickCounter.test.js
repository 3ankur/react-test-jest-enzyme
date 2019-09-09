import React from "react";
import Enzyme ,{shallow} from "enzyme";
import ClickCounter from "./clickCounter";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({adapter:new EnzymeAdapter()});

/**
* factory function to create shallowWrapper for the click counter component
* @function setup 
* @param {object} props -Component props specific to this setup
* @param {any} - Initial setup from setup
* @returns {shallowwrapper}
*/
const setup = (props={},state=null)=>{

    const wrapper =  shallow(<ClickCounter {...props} />);
    if(state) return wrapper.setState(state);
    return wrapper;
} 

/**
 * Retuns shallowWrapper containing node(s) with given data test value
 * @param{shallowWrapper} wrapper  Enzymen shallow wrapper to search with in
 * @param {string} val - Value of data-test attributes for search
 * @returns {shallowWrapper} 
 */
const findByTestAttr = (wrapper,val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

test("render without error",()=>{
 const  wrapper = setup();
 const  componentWrapper =  findByTestAttr(wrapper,'component-click-counter');
 // wrapper.find("[data-test='component-click-counter']");
 expect(componentWrapper.length).toBe(1);
});

test("render Increment button",()=>{
    const  wrapper =  setup();
 const  button = findByTestAttr(wrapper,'increment-button');
 // wrapper.find("[data-test='increment-button']");
 expect(button.length).toBe(1);
});

test("render Decrement button",()=>{
    const  wrapper =  setup();
 const  button = findByTestAttr(wrapper,'decrement-button');
 // wrapper.find("[data-test='increment-button']");
 expect(button.length).toBe(1);
});

test("render counter display",()=>{
    const  wrapper =  setup();
 const  counteDisplay = findByTestAttr(wrapper,'counter-display');
 //wrapper.find("[data-test='counter-display']");
 expect(counteDisplay.length).toBe(1);
});

test("counter start with 0",()=>{
    const  wrapper =  setup();
 const  initialCounterState = wrapper.state("counter");
 console.log(initialCounterState);
 expect(initialCounterState).toBe(0);
});


test("Click button increment  Counter Test",()=>{
  
    const counter = 7;
    const  wrapper = setup(null,{counter});
    const  button = findByTestAttr(wrapper,'increment-button');
    button.simulate("click");
    wrapper.update();

    const  counteDisplay = findByTestAttr(wrapper,'counter-display');
    expect(counteDisplay.text()).toContain(counter+1);
});


test("Click Decrement button counter test",()=>{
    const counter = 7;
    const wrapper = setup(null,{counter});
    const minusBtn =  findByTestAttr(wrapper,'decrement-button');
    minusBtn.simulate("click");
    wrapper.update();
    
    const counterVal =  findByTestAttr(wrapper,'counter-display');
    expect(counterVal.text()).toContain(counter-1);
})

test("Count can not be negative",()=>{
    const counter = 0;
    const notNegative = false;
    const wrapper = setup(null,{counter,notNegative});
    const minusBtn =  findByTestAttr(wrapper,'decrement-button');
    minusBtn.simulate("click");
    wrapper.update();
    
    const counterVal =  findByTestAttr(wrapper,'error-display');
    console.log(counterVal.debug())
    expect(counterVal.text()).toContain("Counter value can not be less then");
    
    // setTimeout(()=>{
    
    // })
});