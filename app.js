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

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
  
      cookie: {
        secure: process.env.NODE_ENV === "development" ? false : true,
        httpOnly: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? false : "none",
      },
    })
  );

  app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy");

connectPassport();

