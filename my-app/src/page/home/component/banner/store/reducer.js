import * as constants from '../constants'
const defaultState={
    isDisplay:false,
    index:0,
    isTrue:false,
    l1Left:'0px',
    l2Left:'0px'
}
export default (state=defaultState,action)=>{
   if(action.type===constants.changeOver||action.type===constants.changeLeave){
       const newState=JSON.parse(JSON.stringify(state));
       newState.isDisplay=action.value;
       return newState
   }
   if(action.type===constants.leftAnimate||action.type===constants.rightAnimate){
    const newState=JSON.parse(JSON.stringify(state));
    newState.index=action.value.num;
    newState.isTrue=action.value.isTrue;
    
    return newState
   }
   if(action.type===constants.timeOut){
    const newState=JSON.parse(JSON.stringify(state));
    newState.isTrue=action.value;
    return newState
   }
   if(action.type===constants.l2Left){
    const newState=JSON.parse(JSON.stringify(state));
    newState.l2Left=action.value;
    return newState
   }
   if(action.type===constants.l1Left){
    const newState=JSON.parse(JSON.stringify(state));
    newState.l1Left=action.value;
    return newState
   }
    return state
}
