"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var router_1 = require('./router');
var users_1 = require('./users');
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(app) {
        _super.call(this, app);
        this.routes = [this, new users_1.default(app)];
    }
    Index.prototype.getHomePage = function () {
        return function (req, res, next) {
            res.render('index', { title: 'Hello World' });
        };
    };
    ;
    Index.prototype.RootRoute = function () {
        return '/';
    };
    Index.prototype.mountRoutes = function () {
        this.router.get('/', this.getHomePage);
        console.log('Home Mounted !');
        return this.router;
    };
    ;
    return Index;
}(router_1.default));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Index;
//# sourceMappingURL=index.js.map