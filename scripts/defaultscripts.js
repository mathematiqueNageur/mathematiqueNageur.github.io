function testscript() {
    window.alert("Scripty Script!");
}

/**
 * For headers/footers
 */

//TBA

/**
 * For firstscripts.html
 */
function greeting() {
    const NAME = document.getElementById("guestname").value;
    const MOOD = document.getElementById("guestfeeling").value;
    // Added checks and defaults in case elements have no values
    let greetName = NAME;
    let greetMood = MOOD;
    if (NAME === "") {
        greetName = "friend";
    }
    if (MOOD === "") {
        greetMood = "just fine";
    }
    let output = "The Dapper Hippo welcomes you, " + greetName + "!<br>We\'re glad you are doing " + greetMood + "!"
    document.getElementById("greetingdisplay").innerHTML = output;
}

function tempConvFToC() {
    // Converts Fahrenheit to Celsius
    const TEMPERATURE = document.getElementById("tempconversion").value;
    let output = (TEMPERATURE - 32.0) * (5.0 / 9.0);
    document.getElementById("tempconvdisplay").innerHTML = output.toFixed(2) + "&#176;C";
}

function optimalTeaTemp() {
    // Checks for the tea type and suggests a temperature based on it
    let teaType = document.getElementById("teatype").value;
    teaType = teaType.toLowerCase();
    let output = "";
    switch (teaType) {
        case "white":
        case "green":
            output = "170 to 185&#176;F";
            break;
        case "black":
        case "herbal":
            output = "208 to 212&#176;F";
            break;
        case "oolong":
            output = "180 to 190&#176;F";
            break;

        default:
            document.getElementById("teatempdisplay").innerHTML = "I don't recognize that type of tea..."
            return 0;
    }
    document.getElementById("teatempdisplay").innerHTML = "We would suggest that you brew your tea between " + output + ".";
}

function superiorBeverage() {
    // Reads the input and gives one of a variety of different outputs
    let beverageChoice = document.getElementById("guestbeveragechoice").value;
    beverageChoice = beverageChoice.toLowerCase();
    let output = "";

    switch (beverageChoice) {
        case "coffee":
            output = "Are you sure about that?";
            break;
        case "tea":
            output = "Truly an excellent choice!";
            break;
        case "soda":
        case "cola":
        case "pop":
            output = "Fizzy!";
            break;
        case "water":
            output = "It is important to hydrate.";
            break;
        case "vodka":
            output = "...Who hurt you?";
            break;

        default:
            output = "Well, I didn't expect that answer...";
            break;
    }
    document.getElementById("beveragechoicedisplay").innerHTML = output;
}

function takeANumber() {
    // Reads the contents of an element and gives an output
    let currentNumber = document.getElementById("takeanumberdisplay").innerHTML;
    let output = 0;
    if (currentNumber === "") {
        currentNumber = 0;
    }
    if (currentNumber >= 0 && currentNumber < 10) {
        output = (currentNumber / 1) + 1;
    } else {
        output = "Please stop, you've already taken all my numbers...";
        document.getElementById("takeanumberbutton").disabled = true;
    }
    document.getElementById("takeanumberdisplay").innerHTML = output;
}

function meaningOfLife() {
    // Takes the input and slowly moves it towards 42
    const INPUTVAL = document.getElementById("molguess").value;
    const MOL = 42;
    const MOLSTRING = "The Meaning of Life and Everything";
    // Started to use (INPUTVAL/1) to avoid INPUTVAL being treated as a string when necessary
    if ((INPUTVAL / 1) > MOL) {
        output = (INPUTVAL / 1) - (((INPUTVAL / 1) - MOL) / 2);
        output = Math.floor(output);
    } else if ((INPUTVAL / 1) < MOL) {
        output = (INPUTVAL / 1) + ((MOL - (INPUTVAL / 1)) / 2);
        output = Math.ceil(output);
    } else if ((INPUTVAL / 1) == MOL || INPUTVAL == MOLSTRING) {
        if ((INPUTVAL / 1) == MOL) {
            output = MOLSTRING
        } else {
            output = MOL;
        }
    } else {
        output = "Try the Hitchhiker\'s Guide";
    }
    document.getElementById("molguess").value = output;
}

function currentDate() {
    // Outputs the Today's Date with formatting
    const TODAY = new Date();
    let output = "Today is ";
    // 24hr time would be simpler but this is for 12hr time
    if (TODAY.getHours() <= 12) {
        if (TODAY.getHours() == 12) {
            output += (TODAY.getHours() + ":" + TODAY.getMinutes() + "pm on ");
        } else {
            output += (TODAY.getHours() + ":" + TODAY.getMinutes() + "am on ");
        }
    } else {
        if (TODAY.getHours() == 24) {
            output += ((TODAY.getHours() - 12) + ":" + TODAY.getMinutes() + "am on ");
        } else {
            output += ((TODAY.getHours() - 12) + ":" + TODAY.getMinutes() + "pm on ");
        }
    }
    // Translates the numerical day of the week to the weekday
    switch (TODAY.getDay()) {
        case 0:
            output += "Sunday";
            break;
        case 1:
            output += "Monday";
            break;
        case 2:
            output += "Tuesday";
            break;
        case 3:
            output += "Wednesday";
            break;
        case 4:
            output += "Thursday";
            break;
        case 5:
            output += "Friday";
            break;
        case 6:
            output += "Saturday";
            break;

        default:
            output += "a day";
            break;
    }
    // Translates the numerical month value to the month name
    output += (", " + TODAY.getDate() + " ");
    switch (TODAY.getMonth()) {
        case 0:
            output += "January";
            break;
        case 1:
            output += "February";
            break;
        case 2:
            output += "March";
            break;
        case 3:
            output += "April";
            break;
        case 4:
            output += "May";
            break;
        case 5:
            output += "June";
            break;
        case 6:
            output += "July";
            break;
        case 7:
            output += "August";
            break;
        case 8:
            output += "September";
            break;
        case 9:
            output += "October";
            break;
        case 10:
            output += "November";
            break;
        case 11:
            output += "December";
            break;

        default:
            output += "a month";
            break;
    }
    // Ends the output with the year
    output += (", " + TODAY.getFullYear() + ".");
    document.getElementById("datedisplay").innerHTML = output;
}