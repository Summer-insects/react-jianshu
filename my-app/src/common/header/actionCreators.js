import * as constants from './constants'
import axios from 'axios'
export const createFocused=(state)=>{
    return{focused:state.header.focused,
        searchItemArr:state.header.searchItemArr,
        searchInfoTrue:state.header.searchInfoTrue,
        index:state.header.index,
        pageNum:state.header.pageNum,
        signUptrue:state.header.signUptrue
    } 
}
export const changeWithLong=()=>({
        type:constants.changeWidthLong,
        value:false
})

export const changeWithShort=()=>({
    type:constants.changeWidthShort,
    value:true
})

export const searchInfoOver=()=>({
    type:constants.searchInfoOver,
    value:false
})
export const searchInfoLeave=()=>({
    type:constants.searchInfoLeave,
    value:true
})
export const OnChangeIndex=(num)=>({
    type:constants.OnChangeIndex,
    value:num
})

export const changeAjax=()=>{
    return (dispatch)=>{
        
        console.log('发送了ajaxs')
        axios.get('/api').then((res)=>{
           const action={
                type:constants.changeAjax,
                value:res.data
            }
           
            dispatch(action)
            
        })
    }
}
export const signOut=()=>({
    type:'signOut',
    value:true
})