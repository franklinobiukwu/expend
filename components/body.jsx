import React from 'react'
import { Button } from 'react-bootstrap';

import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div>
      <div style={{ marginBottom: "100px", marginTop: "350px", boxShadow:"revert-layer" }}>
        <Button>
          <Link to="/addExpenditure">Add Expenditure </Link>
        </Button>
      </div>
      <div>
        <Button> Expenditures </Button>
      </div>
    </div>
  )
}

export default Body