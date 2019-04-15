import React, { Component } from 'react';
import { FocusZone, List, FocusZoneDirection, IconButton, Stack} from 'office-ui-fabric-react'
import InputCard from './InputCard/InputCard';
import { CardItem } from '../Models/CardItem';


class CardList extends Component {
  
  state = {
    filterText: '',
    items: Array(1).fill(new CardItem())
  };


  render() {
    const { items = [] } = this.state;
    return (
      <FocusZone direction={FocusZoneDirection.vertical}>
      <Stack horizontalAlign="center" verticalAlign="center">
      <Stack horizontalAlign="end" verticalAlign="center">
        <List items={items} onRenderCell={(item, index)=>this._onRenderCell(item, index)} />
        <IconButton iconProps={{ iconName: 'Add' }} title="Delete" ariaLabel="Delete" className="delete-button" onClick={
          ()=>{this.onAddClick();}
        }/>   
        </Stack>
        </Stack>   
      </FocusZone>
    );
  }

  _onRenderCell(item, index) {
    console.log(item);
    return (
      <InputCard data={item}
        onChangeCallback={(newValue)=>{
        const {items} = this.state;
        let newItems = items.slice();
        newItems[index] = newValue;
        this.setState({items:newItems});
      }} onDelete={()=>{this.onDeleteClick(index)}} />
    );
  }

  onDeleteClick(index) {
    const {items} = this.state;
    let newItems = [...items];
    newItems.splice(index,1);
    this.setState({items:newItems}, ()=>{});
  }
  
  onAddClick() {
    const {items} = this.state;
    let newItems = items.slice();
    newItems.push(new CardItem());
    this.setState({items:newItems});
  }

}


export default CardList;