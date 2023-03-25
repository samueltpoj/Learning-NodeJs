// const { Person } = require("./person.js");
// const person = new Person("Samuel");
// require("./modules/fs.js");
// require("./modules/http.js");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
dotenv.config();
connectToDatabase();
require("./modules/express.js");
