import React, { Component } from 'react';
import './style.css';
import Items from './Items.js';
import AddItemForm from './AddItemForm.js';

let items = [
        {
          id: 1,
          name: 'Pizza',
          expires: '2017-01-21'
        }
      ]

class Fridge extends Component {
  constructor(){
    super();

    this.state = {
        items: items,
        itemID: null
    }

    this.discardFood = this.discardFood.bind(this);
    this.restockFridge = this.restockFridge.bind(this);
  }

  componentWillMount(){
    this.setState({
      items: items,
      itemID : this.state.items[this.state.items.length-1].id
    })
  }

  componentDidMount() {
    this.discardFood(items);
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
            itemID = {this.state.itemID}
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
    items.length < 10 ? items.push(item) : alert("Full fridge. Eat something or throw something away.");
    this.setState({
      items,
      itemID: this.state.itemID +1
    })
  }
}

export default Fridge;
