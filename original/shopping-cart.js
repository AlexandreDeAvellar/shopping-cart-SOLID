"use strict";
exports.__esModule = true;
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this._items = [];
    }
    ShoppingCart.prototype.talk = function (name) {
        console.log("Hello " + name);
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
var a = new ShoppingCart();
a.talk('Ale');
