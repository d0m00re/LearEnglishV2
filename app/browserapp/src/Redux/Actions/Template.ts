import * as constant from './../Constants/Template';
import * as types from './../Types/Template';

export const templateReset = () : types.IActionTemplateOutReset => {
    return ({
            type : constant.TEMPLATE_RESET
        });
};

export const templateSet = (data : types.ITemplate) : types.IActionOutTemplateSet => {
    return ({
        type : constant.TEMPLATE_SET,
        payload : data
    })
};