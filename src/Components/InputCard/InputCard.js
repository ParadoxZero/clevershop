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

  render() {
    console.log(this.props)
    return (
      <Stack horizontal verticalAlign="center" gap={10} >
        <LabelBox value={this.state.label} placeholder="Enter a Label" borderless={true} size={10} onChange={(newValue)=> {console.log(newValue)}}/>
        <LabelBox value={this.state.cost} label="Enter Cost" placeholder="cost" borderless={false} size={4} onChange={(newValue)=> {console.log(newValue)}}/>
        <LabelBox value={this.state.label} label="Enter Quantity" placeholder="Qty" borderless={false} size={4} onChange={(newValue)=> {console.log(newValue)}}/>
        <Text block>Cost is {this.state.costPerUnit || 0} Per Unit</Text>
        <IconButton iconProps={{ iconName: 'Delete' }} title="Delete" ariaLabel="Delete" className="delete-button"/>      
      </Stack>
    );
  }

  
}

export default InputCard;