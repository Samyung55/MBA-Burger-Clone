const { express, urlencoded } = require("express")
const dotenv = require("dotenv")
const { connectPassport } = require("./utils/Provider.js")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const { errorMiddleware } = require("./middlewares/errorMiddleware.js")
const cors = require("cors")

const app = express();
export default app;
dotenv.config({
  path: "./config/config.env",
});

