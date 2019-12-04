const defaultState={
    isTrue:true
}
export default (state=defaultState,action)=>{
    if (action.type==='changTrue'||action.type==='changFalse') {
        const newState=JSON.parse(JSON.stringify(state));
        
        newState.isTrue=action.value;
        return newState
    }

    if (action.type==='changeSignFalse'||action.type==='changeSignTrue') {
        const newState=JSON.parse(JSON.stringify(state));
        
        newState.isTrue=action.value;
        return newState
    }
    
    return state
}