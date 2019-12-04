import React,{Component} from 'react';
import {IndexDiv,Bar,BarFont,InBarFont,Hidden,White,Arrowhead,ParDiv} from './style'
import {connect} from 'react-redux'
import {isShow,changeShow,changeHide} from './actionCreators'
class BarCode extends Component{
    render(){
       
        return(
            <IndexDiv onMouseEnter={()=>this.props.over()} onMouseLeave={()=>this.props.leave()}>
                <Bar></Bar>
                <BarFont>
                    下载简书手机App>
            <InBarFont>随时随地发现和创作内容</InBarFont>
           
                </BarFont>
                
                {this.props.isShow?<White><Hidden></Hidden><ParDiv> <Arrowhead></Arrowhead></ParDiv></White>:null}
            </IndexDiv>

        )
    }
}
const mapStateToProps=(state)=>{
    return isShow(state)
}
const mapDispatchToProps=(dispatch)=>({
    over(){
        dispatch(changeShow())
    },
    leave(){
        
        dispatch(changeHide())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(BarCode)