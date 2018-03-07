var nil = 'nil';
var example = [[1, 2], [10, nil], [5, 4], [7, 3], [10, nil], [10, nil], [1, 4], [6, 2], [7, 3], [10, 3, 7]];

var scoreGame = function scoreGame (game) {
    var results = [3,19,9,20,21,15,5,8,20,20];
    results.split("");
    for (item of results){
        ++results.item;
    }
    return results;
}