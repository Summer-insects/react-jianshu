const defaultState={
    arr:[],
    page:0,
    isTrue:true
}
export default (state=defaultState,action)=>{
    if (action.type==='changeNote') {
        const newState=JSON.parse(JSON.stringify(state));
        newState.arr=action.value;
        return newState
    }
    if (action.type==='addNote') {
        const newState=JSON.parse(JSON.stringify(state));
        newState.arr=newState.arr.concat(action.value);
        newState.page=action.valueNum;
        return newState
    }
    if(action.type==='max'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.isTrue=action.value;
        return newState
    }
    return state
}