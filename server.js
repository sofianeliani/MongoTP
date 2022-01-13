
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const db = require("./models");
const connectionString  = "mongodb+srv://Admin:Admin@cluster0.ix1it.mongodb.net/Restaurants?retryWrites=true&w=majority";
const server = require('http').Server(app);



try {
    // Connexion au cluster MongoDB
    db.mongoose.connect(
      connectionString,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("Mongoose is connect")
      }
    );
  
  } catch (e) {
    console.log("Could not connect");
  }

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true
}



/* utilisation des middlewares */
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/* utilisation des routes (endpoints) */
app.get('/', (req, res) => res.send({ message: "..."}))


server.listen(port, () => console.log(`listening ok`))