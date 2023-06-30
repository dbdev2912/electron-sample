import { defaultBranch, LangsBranch } from './router';
import {  proxy } from './config';

const initState = {    
    proxy,
    auth: { signed: false }
}

export default ( state = initState, action ) => {
    switch (action.branch) {
        case "langs":
            return LangsBranch(state, action);
            break;
        default:
            return defaultBranch(state, action);
            break;
    }
}
