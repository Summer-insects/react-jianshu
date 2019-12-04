import React from 'react';
import {HeaderWrapper,HeaderLogo,Nav,NavItem,
        NavSearch,Addition,Button,SearchWrapper,
        SearchInfo,SearchInfoTitle,SearchInfoSwitch,
        SearchInfoItem} from './style';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as actionCreators from './actionCreators'
class Header extends React.Component{
    
    componentDidMount(){
        axios.get('http://localhost:8080/').then((data)=>{
            console.log(data)
        })
    }

    render(){
        
        
        const newArr=[]
       for (let i = (this.props.index-1)*10; i < this.props.index*10; i++){
           if (this.props.searchItemArr[i]!==undefined) {
            newArr.push(this.props.searchItemArr[i])
           }
       }
        
        return(
            <HeaderWrapper>
                <Link to='/'>
            <HeaderLogo></HeaderLogo>
            </Link>
            <Nav>
               
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载app</NavItem>
            
            {this.props.signUptrue?<Link to='/signUp'><NavItem className='right' onClick={()=>this.props.changeSignTrue()}>登录</NavItem></Link>:<NavItem className='right' onClick={()=>{this.props.signOut()}}>登出</NavItem>}
            
            <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
            <SearchWrapper focused={this.props.focused}>
            <NavSearch focused={this.props.focused} onFocus={()=>this.props.changeWidthLong(this.props.searchItemArr)} onBlur={()=>this.props.changeWidthShort()} className='dd'></NavSearch>
                <span className="iconfont iconfont1" >&#xe6cf;</span>
            
            <SearchInfo focused={this.props.focused} searchInfoTrue={this.props.searchInfoTrue} onMouseEnter={()=>this.props.searchInfoOver()} onMouseLeave={()=>this.props.searchInfoLeave()}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>{
                        this.props.OnChangeIndex(this.props.index,this.props.pageNum,this.ican)
                    }}>
                    <span className="iconfont iconfontZhuan" ref={(ican)=>this.ican=ican} >&#xe665;</span>
                    换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    {newArr.map((item,index)=>{
                        return <SearchInfoItem key={index}>{item}</SearchInfoItem>
                    })}
                </div>
            </SearchInfo>
            </SearchWrapper> 
            </Nav>
            <Addition>
            <Button className='writting'><span className="iconfont">&#xe6b3;</span>写文章</Button>
            {this.props.signUptrue?<Link to='/signUp'><Button className='reg' onClick={()=>this.props.changeSignFalse()}>注册</Button></Link>:null}
                
                </Addition>
            </HeaderWrapper>
        )
    }
    
    
}
const mapStateToprops=(state)=>{
       
    return actionCreators.createFocused(state)
       
    
}
const mapDispatchToprops=(dispatch)=>{
    return{
        changeWidthLong(arr){
            if(arr.length===0){
                dispatch(actionCreators.changeAjax())
            }
            
            dispatch(actionCreators.changeWithLong())
        },
        changeWidthShort(){
            
            dispatch(actionCreators.changeWithShort())
            
        },
        searchInfoOver(){
            dispatch(actionCreators.searchInfoOver())
        },
        searchInfoLeave(){
            dispatch(actionCreators.searchInfoLeave())
        },
        OnChangeIndex(index,pageNum,ican){
            let num=index
            if(num<pageNum){
                num++
            }else{
                num=1
            }
           
            if(ican.style.transform.replace(/\D/ig,'')===''){
                ican.style.transform='rotate(360deg)';
            }else{
                ican.style.transform=`rotate(${parseInt(ican.style.transform.replace(/\D/ig,''))+360}deg)`;
            }
           
           
            dispatch(actionCreators.OnChangeIndex(num))
        },
        signOut(){
            dispatch(actionCreators.signOut())
        },
        changeSignFalse(){
            const action={
                type:'changeSignFalse',
                value:false
            }
            dispatch(action)
        },
        changeSignTrue(){
            const action={
                type:'changeSignTrue',
                value:true
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(Header)