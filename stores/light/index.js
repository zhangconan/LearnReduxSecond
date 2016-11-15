import {createStore} from 'redux';
import lightReducer from '../../reducers/light/';

export default function lightStore(initState){
	return createStore(lightReducer,initState);//初始化创建
}

/**
Store就是把action和state联系到一起的对象。Store 有以下职责：
维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。
Redux应用只有一个单一的 store
*/