const express = require("express");
const session = require("express-session");
const handlebars = require("express-handlebars");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = handlebars.create({
  helpers,
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`app listening on PORT ${PORT}`);
});
