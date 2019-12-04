import styled from "styled-components";
export const DetailParent =styled.div`
    width:620px;
    margin:0 auto;
    
    
    
`
export const Article=styled.div`
    width:620px;

`
export const Title=styled.h1`
    font-size:34px;
    font-weight:700;
    margin-top:50px
`
export const TitleImgParent=styled.div`
    border-radius:50%;
    width:48px;
    height:48px;
    background:url(http://localhost:3000/static/123.webp);
    background-size:contain;
    float:left;
    
    
`
export const Author=styled.div`
    width:620px;
    margin:30px 0px 40px;
    display:inline-block;
    height:50px
`
export const AuthorRight=styled.div`
    height:48px;
    width:564px;
    float:left;
    margin-left:8px
`
export const AuthorName=styled.span`
    font-size:16px
    margin-right:3px
`
export const AuthorFollow=styled.span`
    width:38px;
    height:17px;
    border-radius:40px;
    background-color:#42c02e
    padding:0px 7px 0px 5px;
    color:white
`
export const AuthorMeta=styled.div`
   font-size:12px
    color:#969696;
    margin-top:15px
`
export const Content=styled.div`
div{
    margin-bottom:25px;
    font-size:16px;
    font-weight:400;
    line-height:1.7
}
.img{
    width:700px;
    height:279px;
    margin-bottom:25px;
    margin-left:-40px
}
`