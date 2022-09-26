import React from "react";
import { Button, Card, Col, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Meal.css";

const Meal = (props) => {
  const {
    strMeal,
    idMeal,
    strCategory,
    strArea,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = props.meal;

  return (
    <Col xs={6} sm={4} md={3} lg={3} className="g-3">
      <Card className="p-1 h-100 meal-card d-flex justify-content-between border">
        <Card.Img variant="top" src={strMealThumb}></Card.Img>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text className="m-0 text-primary">
          Ingrediants: {strIngredient1},{strIngredient2},{strIngredient3},
          {strIngredient4},{strIngredient5},
        </Card.Text>
        <Card.Text className="m-0">Category: {strCategory}</Card.Text>
        <Card.Text>Origin: {strArea}</Card.Text>

        <div className="row g-1">
          <div className="col-lg-6 col-sm-12 ">
            <Button
              className="w-100 bg-success border-0"
              onClick={props.handleAddMeal}
            >
              <LinkContainer to={`/meals/${idMeal}`}>
                <Nav.Link className="">Details</Nav.Link>
              </LinkContainer>
            </Button>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Button
              onClick={props.handleAddToCart}
              className="w-100 bg-secondary border-0"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Meal;
