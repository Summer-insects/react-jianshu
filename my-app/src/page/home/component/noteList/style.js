import styled from 'styled-components';
export const NoteInfo=styled.div`
    width:625px;
    overflow:hidden;
`
export const NoteLi=styled.li`
    position:relative;
    width:100%;
 
    border-bottom:1px solid #f0f0f0;
    display:block;
   float:left;
   margin-bottom:20px
   padding:0px 0px 20px;
   
`

export const NoteA=styled.div`
    font-size:18px;
    font-weight:700;
    margin:0px 0 4px;
    width:450px;
    display:block;
    a{
        color:black;
        text-decoration:none
    }
`
export const NoteDiv=styled.div`
    font-size:13px;
    color:#999;
    width:458px;
    line-height:26px;
    margin-top:10px;
    float:left;
    display:block;
    text-decoration: none;
`
export const NoteImg=styled.img`
    width:148px;
    height:98px;
    
    float:left;
    margin-left:15px;
    margin-top:-30px
    border-radius:4px;
    
`
export const InputBtn=styled.div`
    width:625px;
    height:40px;
    background-color:#a5a5a5;
    border-radius:20px;
    color:#fff;
    margin-top:10px;
    margin-bottom:30px;
    font-size:15px;
    text-align:center;
    line-height:40px;
    cursor:pointer
    :hover{
        background-color:#606060
    }
`