import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import bombilla from '../imagenes/bombilla.jpeg'




const WorkCard = () => {
    const [itemsCantidad, setItemsCantidad] = useState(0);
    return (
        <div>
           <Card style={{ width: '18rem' }}>
           <Card.Title style={{color: "black",}}>SORBETES DE ACERO</Card.Title>
  <Card.Img variant="top" src={bombilla} />
  <Card.Body>
   
    <Card.Text style={{color: "black", fontSize: "1.5rem"}}>
    Amigables con el medio ambiente, resistente, y gruesos. 
    </Card.Text>

    <Button onClick={()=> setItemsCantidad (itemsCantidad - 1)} variant="outline-info"> - </Button> 
     <span style={{ fontSize: "2rem", color: "black"}}>{itemsCantidad}</span> 
     <Button onClick={()=> setItemsCantidad (itemsCantidad + 1)} variant="outline-info">+</Button> <br></br>
    <Button variant="primary">Añadir al carrito</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default WorkCard;