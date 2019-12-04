import styled from 'styled-components';
export const Body=styled.div`
    height:100%;
    width:79.375%
    background:#f1f1f1;
    position:absolute;
    overflow:hidden
`
export const LoaclImg=styled.img.attrs({
    src:'http://localhost:3000/static/loaclImg.png'
})`
    
    width:100px;
    height:46.422px;
    position:absolute;
    top:56px;
    left:50px
`
export const Main=styled.div`
    width:300px;
    background-color:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    border-radius:4px;
    
    padding:50px 50px 30px;
    margin:100px auto 0;
    height:416px
    
    
`
export const NormalTitle=styled.h4`
    width:100%;
    height:19px;
    text-align:center;
    color:#969696;
    font-size:18px;
    
    .active{
        font-weight:700;
        color:#ea6f5a;
        border-bottom:2px solid #ea6f5a
    }
    *{
        padding:10px
    }
    span{
        cursor:pointer
    }
    
`
export const Username=styled.form`
    margin-top:50px
   
    overflow:hidden
    
    box-sizing:border-box;
    color:#969696;
    font-size:18px;
    line-height:50px;
    position:relative;
    .icanfontU{
       position:absolute;
       left:10px
    }
    .icanfontP{
        position:absolute;
        left:10px;
        top:50px
     }
     .icanfontPassword{
        position:absolute;
        left:10px;
        top:102px
     }
     .icanfontPhone{
        position:absolute;
        left:7px;
        top:50px
        font-size:20px;
        
     }
    .username{
        
        height:41px;
        line-height:50px
        padding:4px 12px 4px 35px
        background:hsla(0,0%,71%,.1);
        width:251px
        outline:none;
        border:1px solid #c8c8c8;
        border-radius:4px 4px 0px 0px;
        float:left;
        border-bottom:0px
        &::placeholder{
            color:#999
        }
    }
    .password{
        height:41px;
        line-height:50px
        padding:4px 12px 4px 35px
        background:hsla(0,0%,71%,.1);
        width:251px
        outline:none;
        border:1px solid #c8c8c8;
        border-radius:0px 0px 4px 4px;
        float:left
        &::placeholder{
            color:#999
        }
    }
    .phone{
        height:41px;
        line-height:50px
        padding:4px 12px 4px 35px
        background:hsla(0,0%,71%,.1);
        width:251px
        outline:none;
        float:left;
        &::placeholder{
            color:#999
        }
    }
`
export const UsernameZ=styled.form`
    margin-top:50px
   
    overflow:hidden
    
    box-sizing:border-box;
    color:#969696;
    font-size:18px;
    line-height:50px;
    position:relative;
    .icanfontU{
       position:absolute;
       left:10px
    }
    .icanfontP{
        position:absolute;
        left:10px;
        top:50px
     }
     .icanfontPassword{
        position:absolute;
        left:10px;
        top:102px
     }
     .icanfontPhone{
        position:absolute;
        left:7px;
        top:50px
        font-size:20px
     }
    .username{
        
        height:41px;
        line-height:50px
        padding:4px 12px 4px 35px
        background:hsla(0,0%,71%,.1);
        width:251px
        outline:none;
        border:1px solid #c8c8c8;
        border-radius:4px 4px 0px 0px;
        float:left;
        border-bottom:0px
        &::placeholder{
            color:#999
        }
    }
    .password{
        height:41px;
        line-height:50px
        padding:4px 12px 4px 35px
        background:hsla(0,0%,71%,.1);
        width:251px
        outline:none;
        border:1px solid #c8c8c8;
        border-radius:0px 0px 4px 4px;
        float:left
        &::placeholder{
            color:#999
        }
    }
    .phone{
        height:41px;
        line-height:50px
        padding:4px 12px 4px 35px
        background:hsla(0,0%,71%,.1);
        width:251px;
        outline:none;
        border:1px solid #c8c8c8;
        border-bottom:0px
        float:left
        &::placeholder{
            color:#999
        }
    }
`
export const SignInBtn=styled.button.attrs({
    type:'submit'
})`
    width:264px;
    height:25px;
    background:#3194d0
    clear:both;
    padding:9px 18px;
    border-radius:25px;
    outline:none;
    color:#fff;
    display:block;
    box-sizing:content-box;
    font-size:18px;
    margin-top:20px;
`
export const SignUpBtn=styled.input.attrs({
    type:'button',
    value:'注册'
})`
width:264px;
height:25px;
background:#42c02e;

padding:9px 18px;
border-radius:25px;
outline:none;
color:#fff;
display:block;
box-sizing:content-box;
font-size:18px;
margin-top:20px
`
export const ParentCheck=styled.div`
    width:100%;
    height:20px;
    
    clear:both;
    margin-top:20px;
    font-size:15px;
    color:#969696
    .input{
        float:left;
        line-height:20px
    }
    .remember{
        float:left;
        line-height:20px
    }
    .problem{
        float:right
        line-height:20px
    }
`
export const SignUpMessage=styled.div`
    width:300px;
    height:40px;
    text-align:center;
    color:#969696;
    font-size:12px;
    margin-top:30px
    span{
        color:#3194d0;
        cursor:pointer
    }
`