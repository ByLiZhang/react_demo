import React, {Component} from 'react';

class Form extends Component {
	constructor(props){
		super(props);
		// this.state = { //for nested form
		// 	form: {
		// 		email: '',
		// 		password: ''
		// 	}
		// };
		this.state = { // for a single input form
			email: '',
			password: ''
		};
		// this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	// handleInputChange(event){
	// 	console.log('Event target:', event.target);
	// 	console.log('Name:', event.target.name);
	// 	console.log('Value', event.target.value);
	// 	// console.dir(event.target);
		 
	// 	const { name, value } = event.target;
	// 	// this.setState({
	// 	// 	[name]: value  //use [] to evaluate
	// 	// });
	// 	this.setState({
	// 		form:{...this.state.form, //email: this.state.form.email, password: this.state.form.password
	// 			[name]: value  //the final value updates 
	// 		}
	// 	});
	// }
	// 
	handleFormSubmit(event){
		console.log('Submitting form');
		event.preventDefault();
		console.log('State', this.state);
	}

	render(){
		const formStyle = {
			fontSize: '24px'
		};

		const { email, password } = this.state;
		return (
			<form onSubmit={this.handleFormSubmit}>
				<h1>I am a form!</h1>
				<div>
					<label>Email</label>
					<br/>
					<input name='email' type='text' style={formStyle} value={email} /*onChange={this.handleInputChange}*/ onChange={(e)=> this.setState({email:e.target.value})} />
				</div>
				<div>
					<label>Password</label>
					<br/>
					<input name='password' type='password' style={formStyle} value={password} /*onChange={this.handleInputChange}*/ onChange={(e)=> this.setState({password:e.target.value})}/>
				</div>
				<button>login</button>
			</form>
		)
	}
}

export default Form;