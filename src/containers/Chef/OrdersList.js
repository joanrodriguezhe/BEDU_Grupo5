import React from 'react';
import Todo from './Todo';
import './ordersList.css';
import Table from 'react-bootstrap/Table'

function OrdersList(props) {
  let elements = null;
  if (props.show) {
    elements = [...props.orders].filter(e => e.status == 1);
  }
  else {
    elements = [...props.orders];
  }
  
  elements = elements.map(order => <Todo 
    key={order._id} 
    order={order}
    change={props.change} 
    delete={props.delete} 
    handleClose = {props.handleClose} 
    handleShow={props.handleShow} 
    setOrder={props.setOrder}/>)



  return (
    <div className="container-list">
      <Table responsive>
        <thead>
          <tr>
            <th>Listo</th>
            <th>ID</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Cant. productos</th>
            <th>Costo</th>
            <th>Detalles</th>
            {
              localStorage.getItem("type") === "admin"? <th>Cancelar</th>:null
            }
          </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </Table>
    </div>
  )
}




export default OrdersList;