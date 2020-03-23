import * as express from 'express'
import {createConnection} from 'typeorm'
import * as bodyParser from "body-parser";
import { Test } from './model/Test';

createConnection().then(async connection => {
    const APP = express()
    const PORT = process.env['EXPRESS_HTTP_PORT'] || 3000
    
    
    APP.use(bodyParser.json());
    APP.use(express.static('public'))
    
    APP.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
    

}).catch(error => console.log("TypeORM connection error: ", error));

