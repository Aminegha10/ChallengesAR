// Load environment variables from .env file
require("dotenv").config();
// Import required modules
const express = require("express");
const mongoose = require("mongoose");
// Create Express application
const app = express();
// Get MongoDB URI and port from environment variables
const uri = process.env.MONGODB_URI;
const port = process.env.PORT;
// Connect to MongoDB database
mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((err) => console.log(err));
// Define product schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: new Date() },
  isDeleted: { type: Boolean, default: false },
  expirationDate: { type: Date },
});
// Create Product model
const ProductsModel = mongoose.model("products", ProductSchema);
// Array of sample products to add to the database
const products = [
  {
    name: "Laptop",
    price: 1200,
    description: "High-performance laptop with powerful specs.",
    inStock: true,
    expirationDate: new Date("2024-03-02T00:00:00"),
  },
  {
    name: "Smartphone",
    price: 800,
    description: "Latest smartphone with advanced features.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Headphones",
    price: 150,
    description: "Over-ear headphones with noise-cancelling technology.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Smartwatch",
    price: 250,
    description: "Fitness tracker and smartwatch with health monitoring.",
    inStock: false,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Camera",
    price: 600,
    description: "Digital camera with high-resolution imaging.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Gaming Console",
    price: 400,
    description: "Next-gen gaming console for immersive gaming experiences.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Bluetooth Speaker",
    price: 80,
    description: "Portable Bluetooth speaker with crisp sound.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Tablet",
    price: 300,
    description: "Slim and lightweight tablet for on-the-go productivity.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Coffee Maker",
    price: 50,
    description: "Automatic coffee maker for brewing your favorite coffee.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Fitness Tracker",
    price: 100,
    description: "Wearable fitness tracker with heart rate monitoring.",
    inStock: false,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "External Hard Drive",
    price: 120,
    description: "Large-capacity external hard drive for data storage.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Wireless Mouse",
    price: 30,
    description: "Ergonomic wireless mouse for comfortable computing.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Portable Charger",
    price: 20,
    description: "Compact portable charger for on-the-go device charging.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Smart Bulbs",
    price: 15,
    description: "Set of smart bulbs for customizable lighting at home.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Backpack",
    price: 40,
    description: "Durable backpack with multiple compartments for storage.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Wireless Earbuds",
    price: 120,
    description: "True wireless earbuds for immersive audio experiences.",
    inStock: false,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Graphic Tablet",
    price: 200,
    description: "Digital graphic tablet for artists and designers.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Desk Chair",
    price: 150,
    description: "Comfortable desk chair with adjustable features.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Air Purifier",
    price: 80,
    description: "HEPA air purifier for cleaner and fresher indoor air.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
  {
    name: "Electric Toothbrush",
    price: 40,
    description: "Electric toothbrush for effective dental care.",
    inStock: true,
    expirationDate: new Date("2024-03-03T00:00:00"),
  },
];
// Insert sample products into the database
ProductsModel.create(products);
// Update product name from "Laptop" to "Asus"
ProductsModel.findOneAndUpdate({ name: "Laptop" }, { $set: { name: "Asus" } })
  .then((product) => {
    if (product) console.log(product);
    else console.log("Product not found");
  })
  .catch((error) => console.log("Error fetching users: ", error));
// Soft delete product named "Camera"
const softDeleteProduct = () => {
  ProductsModel.findOne({ name: "Camera" }).then((product) => {
    if (product) {
      product.isDeleted = true;
      console.log(product);
      F;
    } else console.log("Product not found");
  });
};
softDeleteProduct();
// Function to hard delete products with expiration date less than or equal to current date
function hardDelete() {
  ProductsModel.deleteMany({
    expirationDate: { $lte: new Date() },
  })
    .then((products) =>
      console.log("the deleted products are :", products.deletedCount)
    )
    .catch((err) => console.log(err));
}
hardDelete();
// Function to mark available products with a specific description
function available() {
  ProductsModel.updateMany(
    { inStock: true },
    { $set: { description: "This product is available" } }
  )
    .then((products) => console.log(products.matchedCount))
    .catch((err) => console.log(err));
}
available();
// Function to delete products that are out of stock
function outOfStock() {
  ProductsModel.deleteMany({ inStock: false })
    .then((products) => console.log(products))
    .catch((err) => console.log(err));
}
outOfStock();
// Start Express server
app.listen(port, () => console.log("Server is running on port", port));
