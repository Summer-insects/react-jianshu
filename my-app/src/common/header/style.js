import styled from 'styled-components';
import local from '../../statics/local.png'

export const HeaderWrapper=styled.div`
  height:58px;
  border-bottom:1px solid #f0f0f0;
  position:relative;
  z-index:11;
  width:1524px
`
export const HeaderLogo=styled.div`
  position:absolute;
  height:56px;
  width:100px;
  background:url(${local});
  background-size:contain;
  display:block;
  background-repeat:no-repeat

`
export const Nav =styled.div`
  cursor:pointer;
  width:1190px
  height:100%
  margin:0 auto;
  box-sizing:border-box;
  padding-right:70px
`
export const NavItem =styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696
  }
  &.active{
    color :#ea6f5a
  }
`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  transition:0.5s;
  width:${props=>props.focused?'160px':'280px'};
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  margin-top:9px;
  padding:0 35px 0 20px;
  margin-left:20px;
  box-sizing:border-box;
  font-size:14px;
  clear:both;
  &::placeholder{
    color:#999;
  }
  

`
export const Addition =styled.div`
  position:absolute;
  right:0px;
  top:0px
  height:56px
  `
  export const Button =styled.div`
  font-size:14px;
  cursor:pointer;
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding:0 20px;
  &.reg{
    color:#ea6f5a;
  }
  &.writting{
    color:#fff;
    background-color:#ea6f5a;
  }
  `
  export const SearchWrapper=styled.div`
    float:left;
    position:relative;
    .iconfont1 {
      position:absolute;
      right:5px;
      bottom:5px;
      width:30px;
      line-height:30px;
      border-radius:15px;
      text-align:center;
      background:${props=>props.focused ? 'none':"#9B9B9B"}
    }
    .iconfontZhuan{
     display:block;
     float:left;
      transition:0.2s;
      
      transform-origin:center center;
    }
  `
  export const SearchInfo=styled.div`
    position:absolute;
    left:20px;
    top:56px;
    width:210px;
    padding:20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    border-bottom:1px solid #f0f0f0;
    border-radius:4px;
    background:white;
    display:${props=>props.focused&&props.searchInfoTrue ? 'none': 'block'}
  `
  export const SearchInfoTitle=styled.div`
   
    margin-bottom:15px;
    color:#969696;
    line-height:20px;
    font-size:14px;
    
  `
  export const SearchInfoSwitch=styled.span`
  float:right;
  font-size:13px
  
`
export const SearchInfoItem=styled.a`
padding:0 5px;
line-height:28px;
border:1px solid #ddd;
color:#787878;
display:inline-block;
font-size:12px;
margin-right:10px;
margin-bottom:10px
`
