import React from 'react';
import Button from '../components/button/button';

const ButtonSection = () => {

    return (
      <div className="App-button">
        <div>
          Size
          <Button size="xs">Click Me</Button>
          <Button size="sm">Click Me</Button>
          <Button size="default">Click Me</Button>
          <Button size="lg">Click Me</Button>
          <Button size="xl">Click Me</Button>
        </div>
        <div>
          Status & Type
          <div style={{display:'flex',flexDirection:'column'}}>
            Default
            <Button status="default">Click Me</Button>
            <Button status="primary">Click Me</Button>
            <Button status="success">Click Me</Button>
            <Button status="warning">Click Me</Button>
            <Button status="danger">Click Me</Button>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
            Outline
            <Button status="default" type="outline">Click Me</Button>
            <Button status="primary" type="outline">Click Me</Button>
            <Button status="success" type="outline">Click Me</Button>
            <Button status="warning" type="outline">Click Me</Button>
            <Button status="danger" type="outline">Click Me</Button>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
            Ghost
            <Button status="default" type="ghost">Click Me</Button>
            <Button status="primary" type="ghost">Click Me</Button>
            <Button status="success" type="ghost">Click Me</Button>
            <Button status="warning" type="ghost">Click Me</Button>
            <Button status="danger" type="ghost">Click Me</Button>
          </div>
        </div>

      </div>
    )
  }

  export default ButtonSection;