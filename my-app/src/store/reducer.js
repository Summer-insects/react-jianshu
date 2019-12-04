import {combineReducers} from 'redux';
import reducer from '../common/header/store/reducer'
import homeReducer from '../page/home/component/banner/store/reducer'
import board from '../page/home/component/board/store/reducer'
import note from '../page/home/component/noteList/store/reducer'
import bar_code from '../page/home/component/bar_code/store/reducer'
import recommend from '../page/home/component/recommend/store/reducer'
import toTop from  '../page/home/reducer'
import detail from '../page/detail/reducer'
import signUp from '../page/signUp/reducer'
export default combineReducers({
    header:reducer,
    homeReducer,
    board,
    note,
    bar_code,
    recommend,
    toTop,
    detail,
    signUp
})