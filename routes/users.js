"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var router_1 = require('./router');
var Users = (function (_super) {
    __extends(Users, _super);
    function Users() {
        _super.apply(this, arguments);
    }
    Users.prototype.getHomePage = function () {
        return function (req, res, next) {
            res.send('this is users router');
        };
    };
    ;
    Users.prototype.RootRoute = function () {
        return '/users';
    };
    Users.prototype.mountRoutes = function () {
        this.router.get('/', this.getHomePage);
        console.log('users Mounted !');
        return this.router;
    };
    ;
    return Users;
}(router_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Users;
//# sourceMappingURL=users.js.map