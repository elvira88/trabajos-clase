var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
} else {
    solved = false;
}

if (solved === true) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}