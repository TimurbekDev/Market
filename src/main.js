import express from 'express'
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { appConfig } from './config/app.config.js';
import { router } from './routes/index.js';
const app = express()

//MIDDLEWARES
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/v1',router)


app.listen(appConfig.port, appConfig.host, () => {
    console.log('Server listening on port : ', appConfig.port);
})