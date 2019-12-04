import React,{Component} from 'react';
import {NoteInfo,NoteLi,NoteA,NoteDiv,NoteImg,InputBtn} from './style'
import {connect} from 'react-redux';
import {changeNote,defaultAction,addNote} from './actionCreators'
import {Link} from 'react-router-dom'
class NoteList extends Component{
    componentDidMount(){
        this.props.getAjax()
    }
    render(){
        
        return(
            <div>
            <NoteInfo>
            
                <ul>
                    {this.props.arr.map((item)=>
                    <NoteLi key={item.id}>
                    <NoteA><Link to={`/detail/${item.id}`}>{item.title}</Link></NoteA>
                        <NoteDiv>{item.content}</NoteDiv>
                        <NoteImg src={item.img}></NoteImg>
                    </NoteLi>
                    )}
                    
                </ul>
                
            </NoteInfo>
             {this.props.isTrue?<InputBtn onClick={()=>this.props.toMore(this)}>阅读更多</InputBtn>:null}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return defaultAction(state)
}
const mapDispatchToProps=(dispatch)=>({
    getAjax(){
        dispatch(changeNote())
    },
    toMore(_this){
        dispatch(addNote(_this))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(NoteList)