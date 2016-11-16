import React,{PropTypes,Component} from 'react';
import {render} from 'react-dom';
import {Provider,connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as showTextAction from '../../actions/showText';
import showTextStore from '../../stores/showText';

let store = showTextStore();

export default class ShowText extends Component {

	_bind(...methods){
		methods.forEach((method)=>{this[method] = this[method].bind(this)});
	}

	constructor(){
		super();
		this._bind('changeShowText','changeShowTextAgain');
	}

	changeShowText() {
		const {actions,textValues} = this.props;
		console.log(actions);
		console.log(this.props);
		if(textValues.flag == 'fir')
			actions.getShowTest();
		else if(textValues.flag == 'sec')
			actions.getShowTextChange();
	}

	changeShowTextAgain() {
		const {actions} = this.props;
		console.log(actions);
		console.log(this.props);
		actions.getShowTextChange();
	}

	render(){
		const {textValues} = this.props;
		let textValue = textValues.en_name+'  '+textValues.ch_name;
		return(
			<div>
				<div>
					<input type="text" value={textValue} onClick={this.changeShowText}/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		textValues:state
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(showTextAction,dispatch)
	}
}
//声明connect连接
ShowText = connect(mapStateToProps,mapDispatchToProps)(ShowText);

render(
	<Provider store={store}>
		<ShowText />
	</Provider>,
	document.getElementById('demo')
);


