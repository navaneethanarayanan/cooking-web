const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let foods = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 199,
    image: "https://picsum.photos/200"
  },
  {
    id: 2,
    name: "Pizza",
    price: 299,
    image: "https://picsum.photos/201"
  }
];

app.get("/api/foods", (req, res) => {
  res.json(foods);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});