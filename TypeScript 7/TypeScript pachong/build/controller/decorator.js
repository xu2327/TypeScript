"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
})(Methods || (Methods = {}));
function use(middleware) {
    return function (target, key) {
        Reflect.defineMetadata('middleware', middleware, target, key);
    };
}
exports.use = use;
function getRequestDecorator(type) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        };
    };
}
exports.get = getRequestDecorator(Methods.get);
exports.post = getRequestDecorator(Methods.post);
