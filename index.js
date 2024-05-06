const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const animalRoutes = require("./Routes/animalRoutes");
const connectMongoDb = require("./connectMongoDb");

const app = express();
const port = process.env.PORT || 3000;

// BodyParser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectMongoDb();
// Use Routes
app.use("/animals", animalRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
