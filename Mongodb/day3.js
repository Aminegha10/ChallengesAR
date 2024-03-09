const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: { type: String },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: new Date() },
});
//Add this array of sample products to your database
const products = [
  {
    name: "Laptop",
    price: 1200,
    description: "High-performance laptop with powerful specs.",
    inStock: true,
  },
  {
    name: "Smartphone",
    price: 800,
    description: "Latest smartphone with advanced features.",
    inStock: true,
  },
  {
    name: "Headphones",
    price: 150,
    description: "Over-ear headphones with noise-cancelling technology.",
    inStock: true,
  },
  {
    name: "Smartwatch",
    price: 250,
    description: "Fitness tracker and smartwatch with health monitoring.",
    inStock: false,
  },
  {
    name: "Camera",
    price: 600,
    description: "Digital camera with high-resolution imaging.",
    inStock: true,
  },
  {
    name: "Gaming Console",
    price: 400,
    description: "Next-gen gaming console for immersive gaming experiences.",
    inStock: true,
  },
  {
    name: "Bluetooth Speaker",
    price: 80,
    description: "Portable Bluetooth speaker with crisp sound.",
    inStock: true,
  },
  {
    name: "Tablet",
    price: 300,
    description: "Slim and lightweight tablet for on-the-go productivity.",
    inStock: true,
  },
  {
    name: "Coffee Maker",
    price: 50,
    description: "Automatic coffee maker for brewing your favorite coffee.",
    inStock: true,
  },
  {
    name: "Fitness Tracker",
    price: 100,
    description: "Wearable fitness tracker with heart rate monitoring.",
    inStock: false,
  },
  {
    name: "External Hard Drive",
    price: 120,
    description: "Large-capacity external hard drive for data storage.",
    inStock: true,
  },
  {
    name: "Wireless Mouse",
    price: 30,
    description: "Ergonomic wireless mouse for comfortable computing.",
    inStock: true,
  },
  {
    name: "Portable Charger",
    price: 20,
    description: "Compact portable charger for on-the-go device charging.",
    inStock: true,
  },
  {
    name: "Smart Bulbs",
    price: 15,
    description: "Set of smart bulbs for customizable lighting at home.",
    inStock: true,
  },
  {
    name: "Backpack",
    price: 40,
    description: "Durable backpack with multiple compartments for storage.",
    inStock: true,
  },
  {
    name: "Wireless Earbuds",
    price: 120,
    description: "True wireless earbuds for immersive audio experiences.",
    inStock: false,
  },
  {
    name: "Graphic Tablet",
    price: 200,
    description: "Digital graphic tablet for artists and designers.",
    inStock: true,
  },
  {
    name: "Desk Chair",
    price: 150,
    description: "Comfortable desk chair with adjustable features.",
    inStock: true,
  },
  {
    name: "Air Purifier",
    price: 80,
    description: "HEPA air purifier for cleaner and fresher indoor air.",
    inStock: true,
  },
  {
    name: "Electric Toothbrush",
    price: 40,
    description: "Electric toothbrush for effective dental care.",
    inStock: true,
  },
];
// Define a mongoose model for products
const ProductModel = mongoose.model("Products", ProductSchema);
// Create products in the database
ProductModel.create(products);
// Find all products and sort them by price in ascending order
ProductModel.find()
  .sort({
    price: 1,
  })
  .then((users) => {
    console.log(users);
  });
// Find all products and limit the result to 4, then log the result
ProductModel.find()
  .limit(4)
  .then((users) => console.log(users));
// Define pagination parameters
const pageSize = 1;
const pageNumber = 3;
// Find products based on pagination parameters and log the result
ProductModel.find()
  .skip((pageNumber - 1) * pageSize)
  .limit(pageSize)
  .then((users) => {
    console.log(users);
  });
// Aggregate products to find the average price, then sort the result
ProductModel.aggregate([
  { $group: { _id: "", count: { $avg: "$price" } } },
  { $sort: { count: 1 } },
]).then((user) => console.log("the average is :", user));
// Find all products and sort them by name in ascending order, then log the result
ProductModel.find()
  .sort({
    name: 1,
  })
  .then((users) => console.log(users));
