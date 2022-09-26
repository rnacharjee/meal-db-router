import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Meal from "./components/Meal/Meal";
import Cart from "./components/Cart/Cart";
import MealDetails from "./components/MealDetails/MealDetails";
import Meals from "./components/Meals/Meals";
import TopNavigation from "./components/Navbar/TopNavigation";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavigation></TopNavigation>

        <Routes>
          <Route exact path="/" element={<Meals></Meals>}></Route>
          <Route exact path="/meals" element={<Meals></Meals>}></Route>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route exact path="/cart" element={<Cart></Cart>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route
            path="/meals/:mealid"
            element={<MealDetails></MealDetails>}
          ></Route>

          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
