export const create=(state)=>{
    return {
        content:state.detail.content
    }
}
export const changeContent=(data)=>({
    type:'changeContent',
    value:data
})