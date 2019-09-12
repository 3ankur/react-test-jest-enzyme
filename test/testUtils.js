import checkPropTypes from "check-prop-types";
import rootReducer from "../src/reducers";
import {createStore,applyMiddleware} from "redux";

import {middlewares} from "../src/configureStore";
/** 
 * 
 * 
*/
export const findByTestAttr = (wrapper,val)=>{
   return wrapper.find(`[data-test='${val}']`)
};

export const storeFactory=(initialState)=>{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
   return createStoreWithMiddleware(rootReducer,initialState);
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
