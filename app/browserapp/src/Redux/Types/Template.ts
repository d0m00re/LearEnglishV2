export interface ITemplate {
    user : string;
    pass : string;
};

export interface IActionTemplateOutReset { 
    type : string
}

export interface IActionOutTemplateSet {
    type : string;
    payload : ITemplate;
};