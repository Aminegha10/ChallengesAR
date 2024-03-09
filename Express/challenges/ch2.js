const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];
app.get("/products/search", (req, res) => {
  let filterproducts;
  if (req.query.minprice) {
    filterproducts = products.filter((ele) => ele.price > req.query.minprice);
  }
  if (req.query.maxprice) {
    filterproducts = products.filter((ele) => ele.price < req.query.maxprice);
  }
  res.send(filterproducts);
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  res.send(products[req.params.id]);
});
app.post("/products", (req, res) => {
  products.push(req.body);
  res.send(products);
});
app.put("/user/:id", (req, res) => {
  user[req.params.id].name = req.body.name;
  res.send(user);
});
app.delete("/user/:id", (req, res) => {
  user.splice(req.params.id, 1);
  res.send(user);
});
app.listen(port, () => {
  console.log("server is running on port", port);
});
