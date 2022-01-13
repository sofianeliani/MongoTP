
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const server = require('http').Server(app);





const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true
}



/* use middleware */
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/* first route */
app.get('/', (req, res) => res.send({ message: "..."}))


server.listen(port, () => console.log(`listening ok`))