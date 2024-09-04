import express from 'express'
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from "path"
import { create } from 'express-handlebars';
import { appConfig } from './config/app.config.js';
import { router } from './routes/index.js';
const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json());
app.set("views", path.join(process.cwd(), "src", "views"));
app.use(bodyParser.urlencoded({ extended: true }));
const hbs = create({
    extname: ".hbs",
    defaultLayout: "main",
  });

app.use("/public", express.static(path.join(process.cwd(),"src", "views", "public")));
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");


app.get("/",(req,res)=>{
    res.render("index")
})

app.use('/api/v1',router)


app.listen(appConfig.port, appConfig.host, () => {
    console.log('Server listening on port : ', appConfig.port);
})