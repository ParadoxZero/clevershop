import React, { Component } from 'react';
import { LabelBox } from '../LabelBox/LabelBox';
import './InputCard.css';
import { Stack, Text, Icon, IconButton } from 'office-ui-fabric-react';
import { CardItem } from '../../Models/CardItem';


class InputCard extends Component {
  state = {
    cost: "",
    qty: "",
    label: "",
    costPerUnit: null
  }

  constructor(props) {
    super(props)
    this.state = {
      cost: props.data.cost,
      qty: props.data.qty,
      label: props.data.label,
      costPerUnit: props.data.costPerUnit
    }
  }

  

  render() {
    console.log(this.state)
    return (
      <Stack horizontal verticalAlign="center" gap={10} >
        <LabelBox value={this.props.data.label} placeholder="Enter a Label" borderless={true} size={10} onChange={(newValue)=> this.updateState({label:newValue})}/>
        <LabelBox value={this.props.data.cost} label="Enter Cost" placeholder="cost" borderless={false} size={4} onChange={(newValue)=> this.updateState({cost:newValue})}/>
        <LabelBox value={this.props.data.qty} label="Enter Quantity" placeholder="Qty" borderless={false} size={4} onChange={(newValue)=> this.updateState({qty:newValue})}/>
        <Text block>Cost is {this.props.data.costPerUnit || 0} Per Unit</Text>
        <IconButton iconProps={{ iconName: 'Delete' }} title="Delete" ariaLabel="Delete" className="delete-button" onClick={()=>{this.props.onDelete()}}/>      
      </Stack>
    );
  }

  updateParent() {
    let item = new CardItem()
    item.qty = this.state.qty;
    item.label = this.state.label;
    item.cost = this.state.cost;
    item.costPerUnit = this.state.costPerUnit;
    this.props.onChangeCallback(item);
  }

  updateState(updateValue) {
    this.setState(updateValue, ()=> {
      const costPerUnit = this.state.cost && this.state.qty ? this.state.cost/this.state.qty: 0;
      this.setState({costPerUnit:costPerUnit}, ()=>this.updateParent());      
    });
  }
}

export default InputCard;