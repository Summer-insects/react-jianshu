import styled from 'styled-components';
import pic1 from './statics/1.png'
import pic2 from './statics/2.png'



export const IndexCarousel=styled.div`
  width:625px;
  height:270px;
  cursor:pointer;
  overflow:hidden;
  border-radius:6px
  position:relative;
  margin-bottom:35px
`
export const BannerLi=styled.div`
    &.l1{
        background:url(${pic2});
        background-size:contain;
        width:625px;
        height:270px;
        position:absolute;
       
    }
    &.l2{
        background:url(${pic1});
        background-size:contain;
        width:625px;
        height:270px;
        position:absolute;
        
    }
    float:left;
    
`
export const Bannerul=styled.ul`
    width:1250px;
    height:270px;
    position:relative;
    //left:${(props)=>{return props.left1+'px'}};
    transition:1s;

`
export const Btn=styled.div`
    width:40px;
    height:50px;
    background-color:rgba(0,0,0,.4);
    position:absolute;
    top:45%;
    z-index:1;
    color:white;
    opacity:${(props)=>props.homeReducer?'1':'0'};
    transition:0.2s

    &.right{
        left:585px
        
    }
    &.left{
        
    }
    .righticonfont{
        position:absolute;
        top:15px
        left:15px
    }
    .lefticonfont{
        position:absolute;
        top:15px
        left:9px
    }
`
export const OlList=styled.ol`
    width:60px;
    display:block;
    height:10px;
    position:absolute;
    z-index:1;
    bottom:0px;
    left:285px
`
export const LiList=styled.li`
    width:25px;
    display:block;
    height:2px;
    background:white;
    margin-right:5px;
    float:left
    &.active{
        background-color: hsla(0,0%,47%,.4)
    }
`