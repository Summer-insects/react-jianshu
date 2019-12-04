import React from 'react'
import {DetailParent,Title,Article,TitleImgParent,Author,AuthorRight,AuthorName,AuthorFollow,AuthorMeta,Content} from './styled';
import {connect} from 'react-redux';
import Head from '../../common/header/index'
import axios from 'axios';
import * as createAction from './actionCreators'
class Detail extends React.Component{
    componentDidMount(){
        axios.get('http://localhost:3000/static/content.json').then((res)=>{
            this.props.changeContent(res.data.data)
        })
        window.scrollTo(0,0)
    }
    render(){
        return(
            <div>
                <Head></Head>
            <DetailParent>
                <Article>
               <Title>自媒体大咖都不用百度，他们用这6个搜索工具找到了更多NB资源</Title>
               <Author>
               <TitleImgParent ></TitleImgParent>
               <AuthorRight>
                   <AuthorName>与羡书2525</AuthorName>
                   <AuthorFollow><span className="iconfont">&#xeaf3;</span>关注</AuthorFollow>
                   <AuthorMeta>2019.03.11 15:44 字数 1637 阅读 1119评论 0喜欢 49</AuthorMeta>
               </AuthorRight>
               </Author>
               <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                
                </Content>
               </Article>
            </DetailParent>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return createAction.create(state)
}
const mapDispatchToProps=(dispatch)=>({
    changeContent(data){
        
        
        dispatch(createAction.changeContent(data))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Detail)