import * as ListContents from './contents/ListContents';
import * as GetContent from './contents/GetContent';


export const TabNewsApi = {

    contents: {
        ...ListContents,
        ...GetContent,
    },

};