const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;

app.get("/", (req, res) => res.send("Hello from AWS EC2 Web Server!--Sumedh_AWS_Migration"));

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
