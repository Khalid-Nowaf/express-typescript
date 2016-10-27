"use strict";
var express = require('express');
require('./users');
require('./index');
var router = express.Router();
var r;
var Routes = (function () {
    function Routes(parameters) {
    }
    Routes.load = function (app) {
        r.forEach(function (route) {
            app.use(route[0], route[1]);
        });
    };
    return Routes;
}());
exports.Routes = Routes;
function Register(root, router) {
    r.push([root, router]);
}
exports.Register = Register;
//# sourceMappingURL=routers.js.map