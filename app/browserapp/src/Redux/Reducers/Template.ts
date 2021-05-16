import * as constants from './../Constants/Template';
import * as types from './../Types/Template';

const initialState : types.ITemplate = { 
    user : '',
    pass : ''
};

const TemplateReducer = (state : types.ITemplate = initialState, action : {type : string, payload : any}) : types.ITemplate => { 
    switch(action.type) {
        case constants.TEMPLATE_RESET:
            return ({...initialState});
        case constants.TEMPLATE_SET:
            return ({...action.payload});
        default:
            return (state);
    }
};

export default TemplateReducer;