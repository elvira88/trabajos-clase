var nil = "nil";
var example = [[1, 2], [10, nil], [5, 4], [7, 3], [10, nil], [10, nil], [1, 4], [6, 2], [7, 3], [10, 3, 7]];
var example1 = [[3, 5], [8, 2], [5, 5], [6, 3], [9, 0], [3, 2], [1, 5], [5, 2], [8, 2], [4, 3, 7]];
var example2 = [];
var example3 = [];
var example4 = [];
var example5 = [[10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, 10, 10]];
//creamos la función para calcular la puntuación de la partida y de cada ronda
function scoreGame (game){
    var resultado = []
        var indexCount = 0;
        for (var i in game) { //Lee el array de example completo 
            var frame = 0;
            for (item of game[i]) {
                frame += item;
            } //Lee los arrays de cada ronda y sumará las puntuaciones [a+b]
                indexCount++;
            if (frame < 10) { //Suma los arrays de cada ronda si su suma es menor de 10
                resultado.push(frame)
            } else if (frame === 10){ //Semipleno(Spare), suma 10 + a del siguiente frame
                var nextRound = parseInt(i) + 1;
                var cogeA = game[nextRound];
                frame = frame + cogeA[0];
                resultado.push(frame);
            } else if (frame === '10nil') { //Pleno (Strike), suma 10 + [a+b] del siguiente frame
                var round = parseInt(i) + 1;
                var cogeA = game[parseInt(i) + 1];
                frame = parseInt(frame) + cogeA[0] + cogeA[1];
            }
            resultado.push(frame);
            } 
        var total = resultado.toString();
        var scoreGlobal = 0;
        resultado.forEach(function(framePoints){scoreGlobal += framePoints}) //Suma todos los frame
        console.log("La puntuación de cada ronda es: " +total+ ".") //Puntuación de cada frame
        console.log("La puntuación total es: " +scoreGlobal+ "."); //Puntuación total
}