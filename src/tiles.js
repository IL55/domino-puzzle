var createNewTile = function(field, val1, val2) {
    var x = val1 * 45;
    var y = val2 * 90;

    var moveRect = function() {
        this.parentNode.appendChild(this);
        var dragTarget = d3.select(this);

        var x = d3.event.dx + parseInt(dragTarget.attr("x"), 10);
        var y = d3.event.dy + parseInt(dragTarget.attr("y"), 10);
        var angle = parseInt(dragTarget.attr("angle"), 10);

        console.log("transform" + dragTarget.attr("transform"));
        dragTarget
            .attr("x", function(){return x; })
            .attr("y", function(){return y; })
            .attr("transform", function(){return "translate(" + x + "," + y +") rotate("+ angle +", 20, 40)"; });
    };

    var rotateRect = function() {
        this.parentNode.appendChild(this);
        var dragTarget = d3.select(this);

        var x = parseInt(dragTarget.attr("x"), 10);
        var y = parseInt(dragTarget.attr("y"), 10);
        var angle = parseInt(dragTarget.attr("angle"), 10) + 90;

        console.log("transform" + dragTarget.attr("transform"));
        dragTarget
            .attr("angle", function(){return angle; })
            .attr("transform", function(){return "translate(" + x + "," + y +") rotate("+ angle +", 20, 40)"; });
    };

    var tile = field.append("g")
                .attr("x", x)
                .attr("y", y)
                .attr("angle", 0)
                .attr("transform", "translate(" + x + ","+ y +") rotate(0, 20, 40)")
                .call(d3.behavior.drag().on("drag", moveRect))
                .on("dblclick", rotateRect);


    var tile1 = tile.append("svg:rect")
        .attr("id", "tile1")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 40)
        .attr("height", 40)
        .attr("fill", "black");

    var tile2 = tile.append("svg:rect")
        .attr("id", "tile2")
        .attr("x", 0)
        .attr("y", 40)
        .attr("width", 40)
        .attr("height", 40)
        .attr("fill", "black");

    tile.append('text').text(val1)
        .attr('x', 12)
        .attr('y', 30)
        .style("font-size","34px")
        .attr('fill', 'white');


    tile.append('text').text(val2)
        .attr('x', 12)
        .attr('y', 70)
        .style("font-size","34px")
        .attr('fill', 'white');


    /*
    // for future dot-style
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++) {
            tile.append("svg:circle")
                .attr("id", "whiteCircle")
                .attr("cx", 12 + i * 15)
                .attr("cy", 10 + j * 10)
                .attr("r", 4)
                .attr("fill", "white");
        }
    }
    */


    tile.append("svg:rect")
        .attr("id", "line")
        .attr("x", 0)
        .attr("y", 39)
        .attr("width", 40)
        .attr("height", 2)
        .attr("fill", "white");

};