import React from 'react';
import {connect} from 'react-redux'
import {IndexCarousel,BannerLi,Bannerul,Btn,OlList,LiList} from './style';
import * as action from './actionCreators'
import {Link} from 'react-router-dom'
class Banner extends React.Component{
    componentWillUnmount(){
        clearInterval(this.timeOut)
        clearInterval(this.timeInter)
    }
    componentDidMount(){
        this.timeInter= setInterval(()=>{
            this.props.rightAnimate(this)
        },5000)
    }
    render(){
       
        return(
            <IndexCarousel onMouseOver={()=>this.props.changeOver(this)} onMouseLeave={()=>this.props.changeLeave(this)}>
                    <Btn className="left" homeReducer={this.props.homeReducer} onClick={()=>this.props.leftAnimate(this)}>
                            <span className="iconfont lefticonfont">&#xe952;</span>
                    </Btn>
                    <Btn className="right" homeReducer={this.props.homeReducer} onClick={()=>this.props.rightAnimate(this)}>
                            <span className="iconfont righticonfont">&#xe60f;</span>
                    </Btn>
                        <OlList>
                            <LiList className={Math.abs(this.props.index%2)===0?'':'active'}></LiList>
                            <LiList className={Math.abs(this.props.index%2)===1?'':'active'}></LiList>
                        </OlList>
                        <Bannerul  style={{"left":-this.props.index*625}}>
                            <Link to='/'>
                        <BannerLi className="l2" l2Left={this.props.l2Left} ref={(l2)=>this.l2=l2} style={{"left":this.props.l2Left}}></BannerLi>
                        <BannerLi className="l1" l1Left={this.props.l1Left} ref={(l1)=>this.l1=l1} style={{"left":this.props.l1Left}}></BannerLi>
                        </Link>
                        </Bannerul>
                    </IndexCarousel>
        )
    }
}
const mapStateToProps=(state)=>{
    return action.defaultAction(state)
}
const mapDispatchToProps=(dispatch)=>({
    changeOver(_this){
        clearInterval(_this.timeInter)
        dispatch(action.changeOver())
    },
    changeLeave(_this){
        _this.timeInter= setInterval(()=>{
            _this.props.rightAnimate(_this)
        },5000)
        dispatch(action.changeLeave())
    },
    leftAnimate(_this){
        if (_this.props.isTrue) {
            return
        }
        _this.timeOut=setTimeout(() => {
            dispatch(action.timeOut())
        }, 1000);
        let num=_this.props.index;
        num--;
        if(num%2===0){
            dispatch(action.l1Left(num*625+'px'))
        }else{
            dispatch(action.l2Left(num*625+'px'))
        }
        dispatch(action.leftAnimate(num))
    },
    rightAnimate(_this){
        if (_this.props.isTrue) {
            return
        }
        
        _this.timeOut=setTimeout(() => {
            dispatch(action.timeOut())
        }, 1000);
        let num=_this.props.index;
       
        num++;
        if(num%2===0){
            dispatch(action.l1Left(num*625+'px'))
        }else{
            dispatch(action.l2Left(num*625+'px'))
        }
        dispatch(action.rightAnimate(num))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Banner)