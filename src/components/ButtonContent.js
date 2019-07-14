import React from "react";
import { Button, ButtonGroup } from "@trendmicro/react-buttons";

class ButtonContent extends React.Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button btnStyle="flat">Home</Button>
          <Button btnStyle="flat">Devices</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default ButtonContent;
