"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var stringData = this.data.split("");
        var leftHand = stringData[leftIndex];
        stringData[leftIndex] = stringData[rightIndex];
        stringData[rightIndex] = leftHand;
        this.data = stringData.join(''); //.join en un array los une en un string, sin parametro los separa con comas, con '' los une sin comas y con otro simbolo lo agrega entre letras
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
