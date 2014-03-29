(function (Kruskal) {
    'use strict';

    var Kruskal = Kruskal || {}, //
        line = {};

    line.create = function (firstNode, secondNode) {
        var _firstNode = firstNode, //
            _secondNode = secondNode, //
            edge;

        return {

            render: function (selector) {
                var selector = selector || Kruskal.constants.containerSelector, //
                    el = document.getElementById(selector);

                el.appendChild(this._createSvgLine());
                el.appendChild(this._createLegend());
            },

            good: function () {
                this._setColor("green");
            },

            waiting: function () {
                this._setColor("#dddddd");
            },

            reading: function () {
                this._setColor("yellow");
            },

            bad: function () {
                this._setColor("red");
            },

            _createSvgLine: function () {
                var line = edge = document.createElementNS(Kruskal.constants.svgNamespace, 'line');

                line.setAttribute('x1', _firstNode.getAttribute("cx"));
                line.setAttribute('y1', _firstNode.getAttribute("cy"));

                line.setAttribute('x2', _secondNode.getAttribute("cx"));
                line.setAttribute('y2', _secondNode.getAttribute("cy"));

                line.setAttribute('stroke-width', "5");
                this.waiting();

                return edge;
            },

            _createLegend: function () {
                // TODO: Remove hardcoded number
                var text = "135", //
                    legend = document.createElementNS(Kruskal.constants.svgNamespace, 'text');

                legend.setAttribute("x", this._getIntersectionOnX() + Kruskal.constants.labelOffset);
                legend.setAttribute("y", this._getIntersectionOnY() + Kruskal.constants.labelOffset);
                legend.textContent = text;

                return legend;
            },

            _getIntersectionOnX: function () {
                return this._getIntersection("cx");
            },

            _getIntersectionOnY: function () {
                return this._getIntersection("cy");
            },

            _getIntersection: function (attribute) {
                var a = parseInt(_firstNode.getAttribute(attribute), 10), //
                    b = parseInt(_secondNode.getAttribute(attribute), 10);
                return (a + b) / 2;
            },

            _setColor: function (color) {
                edge.setAttribute('stroke', color);
            }
        };
    };

    Kruskal.Line = line;

}(Kruskal));
