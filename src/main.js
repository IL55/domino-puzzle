var main = function() {
    var board = createBoard();

    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            createNewTile(board, i, j);
        }
    }
};

$(function() {
    main();
});