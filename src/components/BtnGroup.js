import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const BtnGroup = ({ handleOnFilter }) => {
  return (
    
    <div> 
      
      <ButtonGroup aria-label="Basic example" className="py-5 gap-1 ">
        <Button onClick={() => handleOnFilter("all")} variant="primary" className="button">
          All Movies
        </Button>
        <Button onClick={() => handleOnFilter("happy")} variant="danger">
          Happy Movies
        </Button>
        <Button onClick={() => handleOnFilter("lazy")} variant="warning">
          Lazy Movies
        </Button>
      </ButtonGroup>
    </div>
  );
};
