require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const absensiRoutes = require("./routes/absensi");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/absensi", absensiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di http://localhost:${process.env.PORT}`);
});
