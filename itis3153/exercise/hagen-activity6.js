window.onload = function () {
    // Acquisition of User Input
    var userResponse = prompt("Enter number of sides:");
    // Looping Until Satisfactory Input or Cancelled
    while (userResponse > 7 || userResponse < 3) {
        if (userResponse == null) {
            // Cancel alert
            alert("User cancelled prompt. Good Bye.");
            return -1;
        } else {
            // Repeat prompt
            userResponse = prompt("Enter number of sides:");
        }
    }
    // Output
    alert("Number of sides = " + userResponse + "\nName of Polygon = " + converShape(userResponse));
}

function converShape(numSides) { // Converts input number from 3-7 to a polygon name
    var definedPolygons = ['Triangle','Square','Pentagon','Hexagon','Heptagon'];
    return definedPolygons[numSides-3];
}