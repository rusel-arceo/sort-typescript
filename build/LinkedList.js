"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
//podrian ser doma clase peros se harra en una para ahorrar tiempo
var Nodo = /** @class */ (function () {
    function Nodo(data) {
        this.data = data;
        this.next = null;
    }
    return Nodo;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (value) {
        var nodo = new Nodo(value);
        var tail;
        //if(head ==='undefined') quivale al de abajo
        if (!this.head) {
            this.head = nodo; //Recuerda que se pasan por referencia, no por valor
            return; //como es void puedo usar el return pero sin valor alguno
        }
        tail = this.head;
        while (tail.next) //Mientras sea != de null
         {
            tail = tail.next; //buscamos el ultumo nodo
        }
        tail.next = new Nodo(value);
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var tail = this.head;
            var length = 0;
            while (tail) {
                length++;
                tail = tail.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        //if(this.head===null)
        if (!this.head) {
            throw new Error("index out of bounds");
        }
        var node = this.head;
        var counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("index out of bounds");
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("Lsit is empty"); //No tiene caso
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
