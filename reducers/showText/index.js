import * as TYPE from '../../constants/ShowText';

const initState = {
	flag:'fir',
	en_name:'zhangsan',
	ch_name:'张三'
}

export default function showTextFun(state = initState,action){
	switch(action.type){
		case TYPE.SHOW_TEXT:
			return {
				flag:'sec',
				en_name:'lisi',
				ch_name:'李四'	
			}
		case TYPE.SHOW_TEXT_CHANGE:
			return {
				flag:'fir',
				en_name:'wagnwu',
				ch_name:'王五'
			}
		default :
			return state;
	}
}