import axios from 'axios'
export const changeNote=()=>{
   return (dispatch)=>{
       
    axios.get('http://localhost:3000/note').then((res)=>{
        
        const action={
            type:'changeNote',
            value:res.data.data.topicNote
        }
        dispatch(action)
    })
   } 
}
export const defaultAction=(state)=>({
    arr:state.note.arr,
    page:state.note.page,
    isTrue:state.note.isTrue
})
export const addNote =(_this)=>{
   return (dispatch)=>{
    axios.get(`http://localhost:3000/static/addNote.json?page=${_this.props.page}`).then((res)=>{
       
        const max=Math.floor(res.data.data.topicNote.length/3)
        let num=_this.props.page;
        if (num<max) {
            
            const arr=[];
            num++;
            for (let i = (num-1)*3; i < num*3; i++) {
                if (res.data.data.topicNote[i]!==''||null) {
                    arr.push(res.data.data.topicNote[i])
                }
                
                
            }
           const action={
               type:"addNote",
                value:arr,
                valueNum:num
           }
           dispatch(action)
        }
        if (num===max) {
            const actionMax={
                type:'max',
                value:false
            }
            dispatch(actionMax)
        }
        
    })
   }
}