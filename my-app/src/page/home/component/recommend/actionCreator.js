import axios from 'axios'
export const defaultAction=(state)=>({
    index:state.recommend.index,
    arr:state.recommend.arr,
    maxNum:state.recommend.maxNum,
    maxArr:state.recommend.maxArr
})
export const getAuthors =()=>{
   return (dispatch)=>{
    axios.get('http://localhost:3000/static/author.json').then((res)=>{
      
       
        const action={
            type:'getAuthors',
            
            max:Math.ceil(res.data.data.author.length/3)-1,
            maxArr:res.data.data.author
        }
        dispatch(action)
    })
    }
}