import React, { Component } from 'react';
import './style.css';
import Items from './Items.js';
import AddItemForm from './AddItemForm.js';

let items = [
        {
          name: 'Pizza',
          expires: '2/15/2017'
        },
        {
          name: 'Chicken Pad Thai',
          expires: '2/26/2017'
        },
        {
          name: 'Lemon Cake',
          expires: '2/13/2017'
        }
      ]

class Fridge extends Component {
  constructor(){
    super();

    this.state = {
        items: items,
        itemID: undefined
    }

    this.discardFood = this.discardFood.bind(this);
    this.restockFridge = this.restockFridge.bind(this);
  }

  componentWillMount(){
    this.setState({
      itemID : this.state.items[this.state.items.length-1].id
    })
  }

  render(){

    return(
      <div className='main-fridge'>
        <h1>My Fridge</h1>
        <Items
            items = {this.state.items}
            discardFood = {this.discardFood}
        />
        <AddItemForm
            restockFridge = {this.restockFridge}
            itemID = {this.itemID}
        />
      </div>
      )
  }

  discardFood(foodToBeDiscarded){
    let items = [...this.state.items];
    let itemIndex;

    items.forEach((item, index)=>{
      if(item.id === foodToBeDiscarded){
        itemIndex = index;
      }
    });

    items.splice(itemIndex, 1);

    this.setState({
      items
    })
  }

  restockFridge(item) {
    let items = [...this.state.items];

    items.push(item);

    this.setState({
      items
    })
  }
}

export default Fridge;
