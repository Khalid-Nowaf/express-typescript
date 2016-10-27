import  Router from './router';
import express from 'express';

///////////// ALL ROUTES CLASSES /////////////////
import Users from './users';
// if you create new router file you should import it here
/**
 * Index
 */
class Index extends Router {
  routes: [Router];
  constructor(app: express.Application) {
    super(app);
    this.routes = [this, new Users(app)]; // <--- and you should also add the new class
                                               // instance here 'new thenewrouter(app)',
                                               // you should also pass the app to it 

  }

   getHomePage() {
     return function(req, res, next){
      // render page
      res.render('index', {title: 'Hello World'});
    };
   };

  RootRoute() {
     return '/';
  }
   mountRoutes() {
     this.router.get('/', this.getHomePage);
     console.log('Home Mounted !');
     return this.router;
   };

};

export default Index;





