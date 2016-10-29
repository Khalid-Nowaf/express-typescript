import * as app from 'express';


 /**
  * this is just an abstract class to help you when
    you create new route file.
    1. extend this class
    2. overwrite the abstract functions
    3. import the class in index route
    4. add new instance of the class in the constructor 
  * Router
  */
  abstract class Router {

      router: app.Router;


     constructor() {
         this.router = app.Router();
         this.router.use(this.RootRoute, this.mountRoutes);
      }
      /**
       * should return the root path for the all routes
       * e.g '/users' so the routes will be mounted to it
       */
      abstract RootRoute(): string;
      /**
       * here you used this.router.get('path',function(res,res,next))
       * then you should retuen the router.
       */
      abstract mountRoutes(): app.Router;

 }

 export default Router;