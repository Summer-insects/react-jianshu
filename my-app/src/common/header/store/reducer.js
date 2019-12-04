import * as constants from '../constants'
const defaultState={
    focused:true,
    searchItemArr:[],
    searchInfoTrue:true,
    index:1,
    pageNum:1,
    signUptrue:true
}
export default (state=defaultState,action)=>{
    if(action.type===constants.changeWidthShort||action.type===constants.changeWidthLong){
        // const newState=JSON.parse(JSON.stringify(state));
        const newState=Object.assign({},state)
        newState.focused=action.value;
        return newState;
    }
    if(action.type===constants.changeAjax){
        const newState=JSON.parse(JSON.stringify(state));
        newState.searchItemArr=action.value.searchItemArr;
        newState.pageNum=Math.ceil(action.value.searchItemArr.length/10)
        return newState;
    }
    if(action.type===constants.searchInfoOver||action.type===constants.searchInfoLeave){
        const newState=JSON.parse(JSON.stringify(state));
        newState.searchInfoTrue=action.value;
        return newState;
    }
    if(action.type===constants.OnChangeIndex){
        const newState=JSON.parse(JSON.stringify(state));
        newState.index=action.value;
        
        return newState
    }
    if(action.type==='signUp'||action.type==='signOut'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.signUptrue=action.value;
        return newState;
    }
   
    return state
}