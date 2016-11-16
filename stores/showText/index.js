import {createStore} from 'redux';
import showText from '../../reducers/showText/';

export default function showTextStore(initState){

	return createStore(showText,initState);
}