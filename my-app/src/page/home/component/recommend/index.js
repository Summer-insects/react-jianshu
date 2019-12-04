import React from 'react';
import {Author,RecommendAuthor,Username,UserImg,ImgParent,RightDiv,Follow,Getmore} from './style';
import {connect} from 'react-redux';
import * as defaultAction from './actionCreator'
class Recommend extends React.Component{
    componentDidMount(){
        this.props.author()
    }
    render(){
        const arr=[]
        if (this.props.maxArr.length>0) {
           
       for (let i = this.props.index*3; i < this.props.index*3+3; i++) {
           arr.push(this.props.maxArr[i])
       }
        }
        
       
        return(
            <RecommendAuthor>
            <Author>
                <span>推荐作者</span>
                <div className='page-change' onClick={()=>this.props.rotate(this)}>
                <span className="iconfont" ref={(ican)=>this.ican=ican}>&#xe665;</span>
                换一批
                </div>
            </Author>
            
            
            {arr.map((item)=>(
                <Username key={item.id}>
                <ImgParent>
                <UserImg src={item.img}></UserImg>
                
                </ImgParent> 
                <RightDiv>
                    <div className='content'>{item.content}<Follow><span className="iconfont">&#xeaf3;</span>关注</Follow></div>
                    <div className='prop'>{item.props}</div>
                    
                </RightDiv>
                
             </Username>
            ))}
            <Getmore>查看全部&nbsp;<span className="iconfont">&#xe60f;</span></Getmore>
            
            
            </RecommendAuthor>
        )
    }
}
const mapStateToProps=(state)=>{
    
   return defaultAction.defaultAction(state)
}
const mapDispatchToProps=(dispatch)=>({
    rotate(_this){
        if (_this.ican.style.transform==='') {
            
            _this.ican.style.transform='rotate(360deg)'
        }else{
            _this.ican.style.transform=`rotate(${parseInt(_this.ican.style.transform.replace(/\D/ig,''))+360}deg)`;
        }
        let num=_this.props.index;
        
        if (num<_this.props.maxNum) {
            num++
        }else{
            num=0
        }
        const action={
            type:'changIndex',
            value:num
        }
        dispatch(action)
    },
    author(){
        dispatch(defaultAction.getAuthors())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Recommend)