import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

/*
  Returns an overlay which displays the password
  validation criteria 
*/
const PasswordCriteria = () => {
  return (
    <div className="my-4">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Popover id="popover-positioned-top">
            <Popover.Content>
              <i className="fa-solid fa-circle-check"></i> At least 8 characters long
              <br />
              <i className="fa-solid fa-circle-check"></i> Both password entries must match
              <br />
              <i className="fa-solid fa-circle-check"></i> Cannot be a commonly used
              password
              <br />
              <i className="fa-solid fa-circle-check"></i> Must not contain similarities to your
              personal information.
              <br />
              <i className="fa-solid fa-circle-check"></i> Cannot be entirely numeric
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant="secondary" size="sm">
          View password criteria
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default PasswordCriteria;