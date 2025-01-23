function applyThemeByTime() {
    var hour = new Date().getHours(); // current hour 24-hour format
    console.log("Current hour:", hour); // log current hour

    if (hour >= 18 || hour < 6) { // time 
        pixelcrackStyle.disabled = false; // enable 
        terminalStyle.disabled = true;   // disable 
    } else {
        pixelcrackStyle.disabled = true;  // disable 
        terminalStyle.disabled = false;   // enable 
    }
}
