const defaultState={
    content:""
}
export default(state=defaultState,action)=>{
    if (action.type==='changeContent') {
        const newState=JSON.parse(JSON.stringify(state));
        newState.content=action.value;
        return newState
    }
    return state
}
