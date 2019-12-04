import React from 'react';
// import axios from 'axios';
import {LoaclImg,Main,NormalTitle,Body,Username,SignInBtn,ParentCheck,UsernameZ,SignUpBtn,SignUpMessage} from './styled';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class SignUp extends React.Component{
    constructor() {
        super();
        this.state = {
          val: 0
        };
      }
      componentDidMount() {
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);    // 第 1 次 log
    
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);    // 第 2 次 log
    
        setTimeout(() => {
          this.setState({val: this.state.val + 1});
          console.log(this.state.val);  // 第 3 次 log
    
          this.setState({val: this.state.val + 1});
          console.log(this.state.val);  // 第 4 次 log
        }, 0);
      }
    
    
    
    render(){
       
        if (this.props.signUptrue) {
            return(
          
                <Body className='dd'>
                    
                        
                    <Link to='/'>
                <LoaclImg></LoaclImg>
                </Link>
                
                <Main>
                    <NormalTitle>
                        <span className={this.props.isTrue?'active':null} onClick={()=>this.props.changeTrue()}>登录</span>
                        <b>·</b>
                        <span className={this.props.isTrue?null:'active'} onClick={()=>this.props.changeFalse()}>注册</span>
                       
                    </NormalTitle>
                    {this.props.isTrue?
                         <div>
                         <Username>
                             <span className="iconfont icanfontU">&#xe73f;</span>
                             <input type='text' placeholder="手机号或者邮箱" className='username' ref={(ref)=>this.username=ref} autoComplete= "on"></input>
                             <span className="iconfont icanfontP">&#xe600;</span>
                             <input type='password' placeholder="密码" className='password' autoComplete= "on" ref={(ref)=>this.password=ref}></input>
                         </Username>
                         <ParentCheck>
                         <input type='checkbox' className='input'></input>
                         <div className='remember'>记住我</div>
                         <div className='problem'>登录遇到问题？</div>
                         </ParentCheck>
                         <SignInBtn onClick={()=>{
                             this.props.signUp(this)
                         }}>登录</SignInBtn>
                         
                         </div>
                        :
                          <div>
                            <UsernameZ>
                             <span className="iconfont icanfontU">&#xe73f;</span>
                             <input type='text' placeholder="你的昵称" className='username' ref={(ref)=>this.username=ref}></input>
                             <span className="iconfont icanfontPhone">&#xe615;</span>
                             <input type='text' placeholder="手机号" className='phone' autoComplete= "off" ref={(ref)=>this.phone=ref}></input>
                             <span className="iconfont icanfontPassword">&#xe600;</span>
                             <input type='password' placeholder="设置密码" className='password' autoComplete= "on" ref={(ref)=>this.password=ref}></input>

                         </UsernameZ>
                       <SignUpBtn></SignUpBtn>
                       <SignUpMessage>点击 “注册” 即表示您同意并愿意遵守简书<br /><span>用户协议</span>和<span>隐私政策</span>。</SignUpMessage>
                       </div> 
                    }
                   
                </Main>
                
                </Body>
                
            )    
        }else{
           return <Redirect to='/' />
        }
        
    }
    
}
const mapStateToProps=(state)=>({
    isTrue:state.signUp.isTrue,
    signUptrue:state.header.signUptrue
}) 
const mapDispatchToProps=(dispatch)=>({
    signUp(_this){
        
        let message={
            username:_this.username.value,
             password:_this.password.value
         }
         
         axios.post('/isTrue',message).then((res)=>{
             
             if (res.data) {
                const action={
                    type:'signUp',
                    value:false
                }
                dispatch(action)
             }
             
         })
         
     },
     changeTrue(){
         const action={
             type:'changTrue',
             value:true
         }
        dispatch(action)
     },
     changeFalse(){
        const action={
            type:'changFalse',
            value:false
        }
        
       dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)