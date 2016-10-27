import * as express     from 'express';
import * as path        from 'path';
import * as favicon     from 'serve-favicon';
import * as logger      from 'morgan';
import * as bodyParser  from 'body-parser';

import Index from './routes/index';


/**
 * Server
 */
class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config() {
        this.app.use( logger('dev') );
        this.app.use( bodyParser.json());
        this.app.use( bodyParser.urlencoded({ extended: true}));
        this.app.use(express.static(path.join(__dirname, 'public')));
        // view engine setup
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'jade');
        // catch 404 and forward to error handler
        this.app.use(function(err: any, req, res, next){
            let error = new Error('Not Found');
             err.status = 404;
             next(err);
        });

        // development error handler
        // will print stacktrace
        if (this.app.get('env') === 'development') {
            this.app.use(function(err: any, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                message: err.message,
                error: err
                });
            });
        }

        // production error handler
        // no stacktraces leaked to user
        this.app.use(function(err: any, req, res, next) {
            res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: {}
                });
         });

    }

    private routes() {
      new Index(this.app);
    }
}


export = new Server().app;



