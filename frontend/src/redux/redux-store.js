import {createStore} from "redux";
const reducer=(state=0,action)=>{
    if(action.type=="booking"){
          return state+1;
    }
    return state;
}
 export const store=createStore(reducer);
