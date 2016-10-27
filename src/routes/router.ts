import * as express from 'express';

 /**
  * Router
  */
  abstract class Router {

      router: express.Router;

     constructor(app: express.Application) {
         this.router = app.Router();
         app.use(this.RootRoute, this.mountRoutes);
      }

      abstract RootRoute(): string;
      abstract mountRoutes(): express.Router;

 }

 export default Router;