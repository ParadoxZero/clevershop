import React, { Component } from 'react';
import { IconButton, Text, Stack } from 'office-ui-fabric-react';

export class TitleBar extends Component {
  
  render() {
    return (
    <Stack horizontal verticalAlign="center" horizontalAlign="start" gap={5}>
      <IconButton iconProps={{ iconName: 'CollapseMenu' }} title="Delete" ariaLabel="Delete" className="delete-button" onClick={()=>{console.log("Hi")}}/>
      <Text variant="large" block>Clever Shop</Text>  
    </Stack>
    );  
  }
}