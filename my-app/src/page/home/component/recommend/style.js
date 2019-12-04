import styled from 'styled-components';
export const Author=styled.div`
    color:#969696;
    font-size:14px;
    .page-change{
        float:right;
        cursor:pointer
    }
    span{
        transition:0.2s;
        display:block;
        float:left
    }
`
export const RecommendAuthor=styled.div`
    width:100%;
    height:558px;
    overflow:hidden;
`
export const Username=styled.div`
    
    width:100%;
    height:48px;
    clear:both;
    margin-top:30px
`
export const ImgParent=styled.div`
    width:48px;
    height:48px;
    overflow:hidden;
    border-radius:50%;
    float:left;
`
export const UserImg=styled.img`
    width:48px;
    height:48px;
    
    
`
export const RightDiv=styled.div`
    color:#333;
    
    height:48px;
    width:232px;
    float:left;
    .content{
        margin-left:10px;
        font-size:14px;
        margin-top:10px;
       
    }
    .prop{
        font-size:12px;
        margin-left:10px
        color:#969696;
        margin-top:10px;
    }
`
export const Follow=styled.div`
    width:42px;
    height:18px;
    float:right;
    font-size:13px;
    color:#42c02e;
    line-height:18px;
    font-weight:400;
    cursor:pointer;
    span{
        font-weight:400;
        font-size:13px
    }
`
export const Getmore =styled.div`
    width:100%;
    height:34px;
    border:1px solid #dcdcdc;
    color:#787878;
    border-radius:4px;
    box-sizing: border-box;
    background-color:#f7f7f7;
    font-size:13px;
    line-height:34px;
    text-align:center;
    margin-top:10px;
    cursor:pointer;
    .iconfont{
        font-size:8px
    }

`