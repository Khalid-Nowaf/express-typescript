"use strict";
var app = require('express');
var Router = (function () {
    function Router() {
        this.router = app.Router();
        this.router.use(this.RootRoute, this.mountRoutes);
    }
    return Router;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Router;
//# sourceMappingURL=router.js.map