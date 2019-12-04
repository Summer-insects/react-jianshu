import * as constants from './constants'
export const defaultAction=(state)=>({
    homeReducer:state.homeReducer.isDisplay,
    index:state.homeReducer.index,
    isTrue:state.homeReducer.isTrue,
    l1Left:state.homeReducer.l1Left,
    l2Left:state.homeReducer.l2Left
})
export const changeOver=()=>({
    type:constants.changeOver,
    value:true
})
export const changeLeave=()=>({
    type:constants.changeLeave,
    value:false
})
export const leftAnimate=(num)=>({
    type:constants.leftAnimate,
    value:{num:num,isTrue:true}
})
export const rightAnimate=(num)=>({
    type:constants.rightAnimate,
    value:{num:num,isTrue:true}
})
export const timeOut=()=>({
    type:constants.timeOut,
    value:false
})
export const l1Left=(num)=>({
    type:constants.l1Left,
    value:num
})
export const l2Left=(num)=>({
    type:constants.l2Left,
    value:num
})