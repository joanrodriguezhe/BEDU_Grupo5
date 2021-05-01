import React, { useState, useEffect } from "react";
import Food from "./Food/Food";
import { Button, Container, Form, Col } from 'react-bootstrap'
import FoodModal from "./FoodModal/FoodModal";
import Spinner from '../../../components/UI/Spinner/Spinner';
import { getFoods, getFoodById, getFoodsByCategory } from '../../../services/foods'

function Foods() {
  const [show, setShow] = useState(false);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [food, setFood] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getFoods({ setFoods, setLoading });
  }, [])

  const foodDetail = (foodId) => {
    getFoodById(
      {
        id: foodId,
        setFood
      }
    )
  };

  const foodsMap = foods.map(foods => (
    <Food
      key={foods.idFood}
      idFood={foods._id.substring(foods._id.length - 7)}
      name={foods.name}
      descripcion={foods.description}
      cost={foods.cost}
      image={foods.image}
      foodDetail={() => foodDetail(foods._id)}
      handleShow={() => handleShow()}
      handleClose={() => handleClose()}
    />
  ));
  return (

    <Container className='mb-4'>
      <div className='d-flex align-items-center mb-4 justify-content-center'>
        <Form>
          <Col>
            <Form.Control type="text" placeholder="Nombre Del Platillo" />
          </Col>
        </Form>
        <Button variant="dark" className='p-2' >Buscar</Button>

      </div>
      <div className='col d-flex flex-wrap mb-4 align-content-center justify-content-center'>
        <Button variant="outline-primary" className='p-2 m-2' onClick={() => getFoodsByCategory({ setFoods, setLoading, data: '604d7d8445a6de761e3d91bb' })}>Jugos Naturales</Button>
        <Button variant="outline-warning" className='p-2 m-2' onClick={() => getFoodsByCategory({ setFoods, setLoading, data: '604d7d6e45a6de761e3d91ba' })}>Desayunos</Button>
        <Button variant="outline-success" className='p-2 m-2' >Preparado</Button>
        <Button variant="outline-danger" className='p-2  m-2' >Entregado</Button>
        <Button variant="outline-secondary" className='p-2 m-2' onClick={() => getFoods({ setFoods, setLoading })} >Todos</Button>
      </div>

      <div className="overflow-auto">
        <Container className="overflow-auto vh-75">
          {loading ?
            <Spinner /> :
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 overflow-auto">
              {foodsMap}
            </div>}
        </Container>
        <FoodModal
          food={food}
          show={show}
          handleShow={() => handleShow()}
          handleClose={() => handleClose()}
        />
      </div>

    </Container>
  );
}
export default Foods;
