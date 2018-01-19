import React,{Component} from 'react';
import "./style.css";

class AddItemForm extends Component {
	constructor(){
		super();

		this.state={
			itemName: '',
			itemExpirationDate: ''
		}

		this.getItemData = this.getItemData.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	render(){
		return(
			<div class='item-form'>
				<form onSubmit={this.submitForm}>
				<h1>Add Item</h1>
					<input type='text' placeholder='Type an item' name='itemName' value={this.state.itemName}
					 onChange={this.getItemData} required
					 />
					<input type='date' placeholder='Type an expiration' name='itemExpirationDate' value={this.state.itemExpirationDate}
					 onChange={this.getItemData} required
					 /><br/>
					<input type='submit' className='alert alert-info' value='Post' />
				</form>
			</div>
			)
	}

	getItemData(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	submitForm(e){
		e.preventDefault();

		const newItem = {
			id: this.props.itemIndex + 1,
			name: this.state.itemName,
			expires: this.state.itemExpirationDate
		}

		this.props.restockFridge(newItem)
	}
}

export default AddItemForm;
