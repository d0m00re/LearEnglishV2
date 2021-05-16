import {Dispatch} from 'react';

import * as actions from './../Actions/Template';
import * as types from './../Types/Template';

export const reset = (dispatch : Dispatch<types.IActionTemplateOutReset>, payload : null) => dispatch(actions.templateReset());
export const set = (dispatch : Dispatch<types.IActionOutTemplateSet>, payload : types.ITemplate) => dispatch(actions.templateSet(payload));