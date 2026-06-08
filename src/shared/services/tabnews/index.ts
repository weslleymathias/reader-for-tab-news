import * as ListContents from './contents/ListContents';
import * as GetContentComments from './contents/comments/GetContentComments';
import * as GetContent from './contents/GetContent';


export const TabNewsApi = {

    contents: {
        ...ListContents,
        ...GetContent,
        comments: {
            ...GetContentComments,
        }
    },

};