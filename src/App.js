import React, {Component} from 'react';
import './App.css';
import ListItems from './ListItems';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);
library.add(faEdit);


// Tutorial https://www.youtube.com/watch?v=N8kYlimhuLw&t=https://www.youtube.com/watch?v=N8kYlimhuLw&t= 

class App extends Component {

  /* 
    constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      currentItems : {
        text : '',
        key : '',
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  */

  state = {
    items : [],
    currentItems : {
      text : '',
      key : '',
    }
  }

  handleInput = (event) => {
    this.setState({
      currentItems: {
        text: event.target.value,
        key: Date.now(),
      }
    });
  }

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItems;
    console.log(newItem);
    if(newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items : newItems,
        currentItems : {
          text : '',
          key : ''
        }
      }) 
    } 
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(value => value.key!==key);
    this.setState({
      items: filteredItems,
    });
  }

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(value => {
      if(value.key === key) {
        value.text = text;
      }
    });
    this.setState({
      items: items
    })

  }

  render() {

    return (
      <div className="App">
        <h1>React Project</h1>
        <h2> To do list </h2>
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Entrez votre liste" value={this.state.currentItems.text} onChange={this.handleInput} />
            <button type="submit">Ajouter</button>
          </form>
        </header>

        <ListItems items = {this.state.items}  deleteItem = {this.deleteItem} setUpdate = {this.setUpdate}/>

      </div>
    );

  }
}

export default App;
