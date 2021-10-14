const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
app.use(express.static("public"));

router.get("/test", (req, res) => {
  res.send("Hello");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("You just hit the landing route");
});

router.post("/test", (req, res) => {
  console.log(req.body);
  res.send("User has been created");
});

app.listen(PORT, () => {
  console.log(`We're fired up on http://localhost:${PORT}`);
});
