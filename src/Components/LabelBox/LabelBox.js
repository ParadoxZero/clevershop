import React, { Component } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {Stack} from 'office-ui-fabric-react/lib/Stack' 
import { Label } from 'office-ui-fabric-react/lib/Label';

export class LabelBox extends Component {
  props = {
    label: null,
    placeholder: null,
    borderless:false,
    size:null,
    maxLength: null,
    required: false,
    value: null,
    onChange: ()=>{}
  }
  state = {
    id: `INP${Math.floor(1000*Math.random()+1)}`
  }

  render() {
    return (
      <Stack verticalAlign="Center" horizontalAlign="center">
        <Stack>
          <Label htmlFor={this.state.id}>{this.props.label}</Label>
          <TextField value={this.props.value} placeholder={this.props.placeholder} borderless={this.props.borderless} resizable size={this.props.size} 
          maxLength={this.props.maxLength} required={this.props.required} onChange={(_,value)=>this.props.onChange(value)}/>
        </Stack>
      </Stack>
    );
  }
}
