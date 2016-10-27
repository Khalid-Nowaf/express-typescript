import  Router from './router';
/**
 * Home
 */
class Users extends Router {

   getHomePage() {
     return function(req, res, next){

      res.send('this is users router');
    };
   };

  RootRoute() {
     return '/users';
  }
   mountRoutes() {
     this.router.get('/', this.getHomePage);
     console.log('users Mounted !');
     return this.router;
   };

}

export default Users;





