import { useEffect, useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div>
      <h1>Food Ordering App</h1>

      {foods.map((food) => (
        <div key={food.id}>
          <img src={food.image} width="150" />
          <h3>{food.name}</h3>
          <p>₹{food.price}</p>
          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;