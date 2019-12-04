import React from 'react'
import Banner from './component/banner/banner'
import {HomeWrapper,HomeLeft,HomeRight,Totop} from './style';
import Board from './component/board/board'
import NoteList from './component/noteList/noteList'
import BarCode from './component/bar_code/barCode';
import Recommend from './component/recommend/index'
import {connect} from 'react-redux'
import Head from '../../common/header/index'
class Home extends React.PureComponent{
    componentWillUnmount(){
        clearInterval(this.timeOut)
    }
    componentDidMount(){
      
        const _this=this
        window.onscroll=function(){
            if (window.innerHeight+window.pageYOffset>1000) {
             _this.props.changeShow(true)
            }else{
                _this.props.changeShow(false)
            }
        }
    }
    render(){
       
        return(
            <div>
            <Head></Head>
            <HomeWrapper>
                <HomeLeft>
                    <Banner></Banner>
                   <NoteList></NoteList>
                </HomeLeft>
                <HomeRight>
                    <Board></Board>
                    <BarCode></BarCode>
                    <Recommend></Recommend>
                </HomeRight>
               {this.props.isShow?<Totop onClick={()=>this.toTop()}><span className="iconfont">&#xe631;</span></Totop>:null} 
               
            </HomeWrapper>
            </div>
        )
    }
    toTop(){
        window.scrollTo(0,0)
    }
    
}
const mapStateToProps=(state)=>({
    isShow:state.toTop.isShow
})
const mapDispatchToProps=(dispatch)=>({
    changeShow(panduan){
        
        const action={
            type:'isShow',
            value:panduan
        }
        dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)