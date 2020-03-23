import * as express from 'express';
import {Request, Response} from "express";
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import { RouteConfig } from './routes.config';

createConnection()
  .then(async connection => {
    const APP = express();
    const PORT = process.env['EXPRESS_HTTP_PORT'] || 3000;

    APP.use(bodyParser.json());
    APP.use(express.static('public'));

    RouteConfig.forEach(route => {
      APP[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch(err => next(err));
        }
      );
    });

    APP.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`)
    );
  })
  .catch(error => console.log('TypeORM connection error: ', error));
