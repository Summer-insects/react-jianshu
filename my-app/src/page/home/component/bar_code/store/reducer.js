const defaultState={
    isShow:false
}
export default (state=defaultState,action)=>{
    if (action.type==='changeShow'||action.type==='changeHide') {
        const newState=JSON.parse(JSON.stringify(state));
        newState.isShow=action.value;
        return newState
    }
    return state
}