export const isShow=(state)=>({
    isShow:state.bar_code.isShow
})
export const changeShow=()=>({
    type:'changeShow',
    value:true
})
export const changeHide=()=>({
    type:'changeHide',
    value:false
})