
var vertical = 0;
var horizontal = 1;

// board - svg container
// style - 0 - vertical/ 1 - horizontal
// position relative (x:0..9, y:0..9)
// predefined value
var createTileContainer = function(board, style, position, predefinedValue) {

    // position for tile container
    var x = 400 + position.x * config.tile.width;
    var y = 10 + position.y * config.tile.height;

    // if horizontal rotate it
    var angle = 0;
    if (style) {
        angle = -90;
    }

    var tileContainer = board.append("g")
        .attr("transform", function(){
            return "translate(" + x + "," + y +") rotate("+
                angle +"," + config.tile.center.x + "," + config.tile.center.y + ")";
        });

    var tileBorder = tileContainer.append("svg:rect")
        .attr("id", "tileBorder")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", config.tile.width)
        .attr("height", config.tile.height)
        .attr("fill", config.tile.color)
        .attr("stroke-width", config.tileContainer.borderHeight)
        .attr("stroke", config.tile.bgcolor);

    if (predefinedValue.val1) {
        tileContainer.append('text').text(predefinedValue.val1)
            .attr('x', config.tile.text.position1.x)
            .attr('y', config.tile.text.position1.y)
            .style("font-size", config.tile.text.size)
            .attr('fill', config.tileContainer.text.color);
    }

    if (predefinedValue.val2) {
        tileContainer.append('text').text(predefinedValue.val2)
            .attr('x', config.tile.text.position2.x)
            .attr('y', config.tile.text.position2.y)
            .style("font-size", config.tile.text.size)
            .attr('fill', config.tileContainer.text.color);
    }
};


var createBoard = function(model) {
    var board = d3.select("#board")
        .append("svg:svg")
        .attr("width", 1000)
        .attr("height", 800);

    createTileContainer(board, vertical, {x:0, y:0}, {val1: 2, val2: null});
    createTileContainer(board, vertical, {x:0, y:0}, {val1: 2, val2: null});

    return board;
};


