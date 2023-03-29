const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./src/routes");

dotenv.config();

app.use(express.json());

// Usar o body-parser para pegar os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importar as rotas
app.use(router);

app.listen(3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
