import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreateors from './actionCreateors'
import {RightPic} from './style'
class Board extends Component{
    
    
    render(){
        
        return(
            this.props.arr.map((item)=>{
                return <RightPic src={item} key={item}></RightPic>
            })
        )
    }
}
const mapStateToProps=(state)=>{
    return actionCreateors.action(state)
}
export default connect(mapStateToProps,null)(Board);