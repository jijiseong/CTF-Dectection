import express from "express";
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import router from "./routes/router.js";

const app = express();

//middle ware
app.set('views', './views');
app.set("view engine", "pug");
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
    });
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet({ contentSecurityPolicy: false })); 

app.use(express.static('uploads'));
app.use(express.static('views/css'));
app.use(express.static('detection'));
app.use("/", router)

export default app;