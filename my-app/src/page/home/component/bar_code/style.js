import styled from 'styled-components';
export const IndexDiv =styled.div`
    width:238px;
    height:60px;
    border:1px solid #f0f0f0
    position:relative
    padding:10px 20px
    margin-bottom:20px
`

export const Bar =styled.div`
    width:60px;
    height:60px;
    background:url(http://localhost:3000/static/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png);
    background-size:contain;
    float :left;
    
`
export const BarFont =styled.div`
    
    height:40px;
    float :left;
    margin:10px;;
    font-size:15px;
    color:#333
`
export const InBarFont =styled.div`
    
    height:20px;
   font-size:13px;
   margin-top:8px;
   color:#999
`
export const Hidden=styled.div`
    
    width:180px;
    height:180px;
    
    background:url(http://localhost:3000/static/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png);
    background-size:contain;
    margin:10px
`
export const White=styled.div`
    position:absolute;
    top:-200px;
    left:50px;
    width:200px;
    height:200px;
    background:white;
    border:1px solid #999;
    
`
export const Arrowhead=styled.div`
    z-index:10;
    width:18px;
    height:15px;
    transform:rotate(45deg);
   
    margin-top:-10px;
    border:1px solid #999;
`
export const ParDiv=styled.div`
    width:21px;
    height:18px;
    overflow:hidden;
    background:white;
    position:absolute;
    left:85px

`