import React, {Component} from 'react';
import './style.css';

class Items extends Component {
	render(){
			let items = this.props.items.map(item=>(
						<li
							key={item.id}
							>
										{item.name}<br/>
										{"Expiration Date: " + item.expires}<br/>
										<button className={this.getExpirationDate(item.expires) === 'expired' ? "alert alert-danger" : "alert alert-success"} onClick={()=>{this.deleteItem(item.id)}}>
											 {this.getExpirationDate(item.expires) === 'expired' ? "Expired. Discard?" : "Pick out and eat?"}
										</button>
						</li>
			));

			const emptyFridge = (<span>Nothing inside your fridge</span>);

		return(
			<div className='item-list'>
					{this.props.items.length > 0 ? items : emptyFridge}
			</div>
			)
	}

	deleteItem(itemID){
		this.props.discardFood(itemID);
	}

	getExpirationDate(date){
			let now = new Date();
			let expiration = new Date(date);
			let convertedExpirationDate = expiration.setDate(expiration.getDate() + 1)
			return convertedExpirationDate > now ? '' : 'expired';
	}
}

export default Items;
