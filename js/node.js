(function (Kruskal) {
    'use strict';

    var Kruskal = Kruskal || {}, //
        node = {};

    node.create = function (x, y) {
        var _x = x, //
            _y = y;

        return {

            getX: function () {
                return _x || 0;
            },

            getY: function () {
                return _y || 0;
            },

            render: function (selector) {
                var selector = selector || Kruskal.constants.containerSelector, //
                    el = document.getElementById(selector);
                el.appendChild(this._createSvgNode());
            },

            _createSvgNode: function () {
                var node = document.createElementNS(Kruskal.constants.svgNamespace, "circle");
                node.setAttribute("cx", this.getX());
                node.setAttribute("cy", this.getY());
                node.setAttribute("r", 20);
                return node;
            }
        }
    };

    Kruskal.Node = node;

}(Kruskal));
