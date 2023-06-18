import React from 'react'
import {InputGroup, Form, Button} from 'react-bootstrap';

const Expenditure = () => {
  return (
    <div>
        <div className='Container' style={{border:"1px solid teal"}}>
             <br />
      < div className='Row' style={{border:"1px solid grey",margin:"15px", display: "flex", flexWrap: "wrap",  gap: "10px", justifyContent:"center"}}>
        <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          ITEM DESCRIPTION
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"/>
      </InputGroup>
      <Form.Select aria-label="Default select example">
      <option>ITEM CATEGORY</option>
      <option value="utilities">Utilities</option>
      <option value="others">Others</option>
    </Form.Select>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          COST / AMOUNT
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"/>
      </InputGroup>
      <div style={{marginBottom:"2rem"}}>
        <Button variant="primary" size="mb">
          EDIT
        </Button>{' '}
        <Button variant="secondary" size="mb">
          DELETE
        </Button>
      </div>
      </div>
      
    </div>
    <br />
    <div className='Container' style={{border:"1px solid teal"}}>
             <br />
      < div className='Row' style={{border:"1px solid grey",margin:"15px", display: "flex", flexWrap: "wrap",  gap: "10px", justifyContent:"center"}}>
        <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          ITEM DESCRIPTION
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"/>
      </InputGroup>
      <Form.Select aria-label="Default select example">
      <option>ITEM CATEGORY</option>
      <option value="utilities">Utilities</option>
      <option value="others">Others</option>
    </Form.Select>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          COST / AMOUNT
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"/>
      </InputGroup>
      <div style={{marginBottom:"2rem"}}>
        <Button variant="primary" size="mb">
          EDIT
        </Button>{' '}
        <Button variant="secondary" size="mb">
          DELETE
        </Button>
      </div>
      </div>
      <br />
    </div>
    <br />
    <div className='Container' style={{border:"1px solid teal"}}>
             <br />
      < div className='Row' style={{border:"1px solid grey",margin:"15px", display: "flex", flexWrap: "wrap",  gap: "10px", justifyContent:"center"}}>
        <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          ITEM DESCRIPTION
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"/>
      </InputGroup>
      <Form.Select aria-label="Default select example">
      <option>ITEM CATEGORY</option>
      <option value="utilities">Utilities</option>
      <option value="others">Others</option>
    </Form.Select>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          COST / AMOUNT
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"/>
      </InputGroup>
      <div style={{marginBottom:"2rem"}}>
        <Button variant="primary" size="mb">
          EDIT
        </Button>{' '}
        <Button variant="secondary" size="mb">
          DELETE
        </Button>
      </div>
      </div>
      <br />
    </div>
    </div>
  )
}

export default Expenditure