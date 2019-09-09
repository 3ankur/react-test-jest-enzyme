import checkPropTypes from "check-prop-types";
import rootReducer from "../src/reducers";
import {createStore} from "redux";
/** 
 * 
 * 
*/
export const findByTestAttr = (wrapper,val)=>{
   return wrapper.find(`[data-test='${val}']`)
};

export const storeFactory=(initialState)=>{
   return createStore(rootReducer,initialState);
}

/**
 * 
 * 
 */
export const checkProps = (component,confirmingProps)=>{
    const propError = checkPropTypes(component.propTypes,
        confirmingProps,
        'prop',
        component.name
        );
        expect(propError).toBeUndefined();
}
