(function (Kruskal, $) {
    'use strict';

    // Selectors
    var container = '#kruskal-container', //
        nodesInput = '#nodes-count', //
        buffer = [];

    $('#nodes-count-submit').click(function () {
        var count = $(nodesInput).val();
        Kruskal.Canvas.renderNodes(count);
    });

    $(container).on('click', 'circle', function (event) {
        buffer.push(event.target);
        if (buffer.length >= 2) {
            var line = Kruskal.Line.create(buffer[0], buffer[1]);
            line.render();
            buffer = []
        }
    });

}(Kruskal, jQuery));
