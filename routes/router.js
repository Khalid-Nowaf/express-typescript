"use strict";
var Router = (function () {
    function Router(app) {
        this.router = app.Router();
        app.use(this.RootRoute, this.mountRoutes);
    }
    return Router;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Router;
//# sourceMappingURL=router.js.map