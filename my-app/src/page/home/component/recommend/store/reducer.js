const defaultState={
    index:0,
    arr:[],
    maxNum:0,
    maxArr:[]

}
export default (state=defaultState,action)=>{
    if (action.type==='getAuthors') {
        const newState=JSON.parse(JSON.stringify(state));
       
        newState.maxNum=action.max;
        newState.maxArr=action.maxArr
        return newState
    }
    if (action.type==='changIndex') {
        const newState=JSON.parse(JSON.stringify(state));
        newState.index=action.value
       
        return newState
    }
    return state
}