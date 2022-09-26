import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { mealid } = useParams();
  const [mealDetail, setMealDetail] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => res.json())
      .then((data) => setMealDetail(data.meals[0]));
  }, []);
  useEffect(() => {
    if (mealDetail.strMeal === undefined) {
      document.getElementById("spinner-div").classList.add("d-block");
      document.getElementById("details-div").classList.add("d-none");
    } else {
      document.getElementById("spinner-div").classList.remove("d-block");
      document.getElementById("details-div").classList.remove("d-none");
      document.getElementById("spinner-div").classList.add("d-none");
      document.getElementById("details-div").classList.add("d-block");
    }
  }, [mealDetail]);
  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strArea,
    strCategory,
    strYoutube,
  } = mealDetail;

  return (
    <>
      <div id="spinner-div" className="d-flex justify-content-center m-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div id="details-div" className="container">
        <h1 className="text-danger fw-bold">{strMeal}</h1>
        <div>
          <img
            className="img-fluid max-width-100% col-md-3 col-sm-6 col-xs-12 g-2 p-1 rounded float-end"
            src={strMealThumb}
            alt="thumbimage"
          />
          <p>
            <span className="fw-bold fs-5 text-primary">Origin: </span>{" "}
            {strArea}
          </p>
          <p>
            <span className="fw-bold fs-5 text-primary">Category: </span>{" "}
            {strCategory}
          </p>

          <p className="text-justify">
            <span className="fw-bold fs-5 text-primary">
              Cooking Instruction:{" "}
            </span>
            {strInstructions}
          </p>
          <p>
            <span className="fw-bold fs-5 text-primary">Ingradients: </span>
            {strIngredient1},{strIngredient2},{strIngredient3}, {strIngredient4}
            ,{strIngredient5}, etc.
          </p>
        </div>
        <Link to={"/meals"}>Back to All Meals</Link>
      </div>
    </>
  );
};

export default MealDetails;
