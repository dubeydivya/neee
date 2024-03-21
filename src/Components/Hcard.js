import React from 'react'
import Card from 'react-bootstrap/Card';
import './css/CardS.css'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
function Hcard({ input }) {
    return <>
        <Zoom> <Link to={input.path} style={{ textDecoration: "none", color: "whitesmoke" }}>
            <Card  style={{ backgroundColor:"black",height:"27rem",borderLeft:"1px solid white",margin:"5px"}} >
                <Card.Img variant="top" src={input.img} />
                <Card.Body className='text-start'>
                    <Card.Title>{input.name}</Card.Title>
                    <Card.Text>
                        {input.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link></Zoom>

    </>
}

export default Hcard