import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function JCards({input}) {
  return (
    <>
      <Card className='text-white  m-1' style={{"backgroundColor":"black","height":"15rem"}} >
        <Card.Body>
          <Card.Title>{input.name}</Card.Title>
          <Card.Text>
            {input.description}
          </Card.Text>
          <Button variant="primary" className=" mb-2">View & Apply</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default JCards;
