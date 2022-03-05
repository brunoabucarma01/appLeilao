const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controller/FormController')(app);
require('./routes/alunoRouter')(app);

app.listen(3000);