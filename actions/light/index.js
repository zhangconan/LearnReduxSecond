import * as lights from '../../constants/TrafficLight';

export function changeGreen(){ //Redux的action创建函数
	return {
		type:lights.CHANGE_GREEN //Redux的action对象
	}
}

export function changeYellow(){
	return {
		type:lights.CHANGE_YELLOW
	}
}

export function changeRed(){
	return {
		type:lights.CHANGE_RED
	}
}
