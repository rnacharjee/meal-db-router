import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Nav,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [cart, setCart] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  console.log(selectedMeals);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setSelectedMeals(data.meals));
  }, []);
  const handleDetailButton = (meal) => {
    let meals = [...selectedMeals];
    meals.push(meal);
    setSelectedMeals(meals);
    console.log(selectedMeals);
  };
  const searchHandler = (event) => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setSelectedMeals(data.meals));
  };
  const handleCartBtn = () => {
    console.log("cart btn clicked");
  };
  const handleAddToCart = (meal) => {
    const myCart = [...cart];
    myCart.push(meal);
    setCart(myCart);
    console.log(cart);
  };

  return (
    <Container fluid="md">
      <div className="row justify-content-between align-items-center">
        <div className="col-8">
          <Form className="row justify-content-center m-2 g-2">
            <FormGroup className="">
              <Form.Control
                onChange={(event) => searchHandler(event)}
                id="search-text"
                type="text"
                placeholder="Search Meal"
              />
            </FormGroup>
          </Form>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <Button onClick={handleCartBtn} className="">
            <LinkContainer to={"/cart"}>
              <Nav.Link>My Cart</Nav.Link>
            </LinkContainer>
          </Button>
        </div>
      </div>
      <Row>
        {selectedMeals ? (
          selectedMeals.map((meal) => (
            <Meal
              key={meal.idMeal}
              handleAddMeal={() => handleDetailButton(meal)}
              handleAddToCart={() => handleAddToCart(meal)}
              meal={meal}
            ></Meal>
          ))
        ) : (
          <h1 className="d-flex justify-content-center">
            Sorry! Could not find Anything. Please search another meal !
          </h1>
        )}
      </Row>
    </Container>
  );
};

export default Meals;
