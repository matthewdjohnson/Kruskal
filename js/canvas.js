(function (Kruskal) {
    'use strict';
    var OFFSET_LIMIT = 960, //
        x = 0, //
        y = 100, //
        Kruskal = Kruskal || {}, //
        canvas;

    canvas = {
        renderNodes: function (count) {
            if (count) {
                for (var index = 1; index <= count; index++) {
                    var position = this._calculatePosition(), //
                        node = Kruskal.Node.create(position.x, position.y);
                    node.render();
                }
            }
        },

        _calculatePosition: function () {
            x = x + 150;
            y = (x < OFFSET_LIMIT) ? y : (y + 150);
            x = (x < OFFSET_LIMIT) ? x : 150;
            return { x: x, y: y };
        }
    }

    Kruskal.Canvas = canvas;

}(Kruskal));
