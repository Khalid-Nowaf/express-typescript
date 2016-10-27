"use strict";
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var index_1 = require('./routes/index');
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'jade');
        this.app.use(function (err, req, res, next) {
            var error = new Error('Not Found');
            err.status = 404;
            next(err);
        });
        if (this.app.get('env') === 'development') {
            this.app.use(function (err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            });
        }
        this.app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    };
    Server.prototype.routes = function () {
        new index_1.default(this.app);
    };
    return Server;
}());
module.exports = new Server().app;
//# sourceMappingURL=app.js.map