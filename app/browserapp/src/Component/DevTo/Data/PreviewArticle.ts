export interface IPreviewArticle {
    img : string;
    title : string;
    nbComment : number;
    nbReaction : number;
    author : string;
    date : string;
};

const makeIArticle = (
    img : string,
    title : string,
    nbComment : number,
    nbReaction : number,
    author : string,
    date : string) : IPreviewArticle => {
        return ({img : img, title : title, nbComment : nbComment, nbReaction, author : author, date : date})
    }

const data : IPreviewArticle[] = [
    makeIArticle('', '"Am I a bad developer?", - A question developers commonly face',
                13, 25, "ManuTheCoder", "May 19"),
    
                makeIArticle('', '"Am I a bad developer?", - A question developers commonly face',
                13, 25, "ManuTheCoder", "May 19"),

                makeIArticle('', '"Am I a bad developer?", - A question developers commonly face',
                13, 25, "ManuTheCoder", "May 19"),

                makeIArticle('', '"Am I a bad developer?", - A question developers commonly face',
                13, 25, "ManuTheCoder", "May 19"),

                makeIArticle('', '"Am I a bad developer?", - A question developers commonly face',
                13, 25, "ManuTheCoder", "May 19"),

                makeIArticle('', '"Am I a bad developer?", - A question developers commonly face',
                13, 25, "ManuTheCoder", "May 19"),
];

export default data;