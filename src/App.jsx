import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  function handleDelete(id) {
    let copy = [...foods];
    const deletedList = copy.filter((food) => food.id !== id);
    setFoods(deletedList);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((meal) => {
        return (
          <FoodBox key={meal.id} food={meal} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default App;
