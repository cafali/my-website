function applyThemeByTime() {
    var hour = new Date().getHours(); // 24h format
    console.log("Current hour:", hour); // log current hour

    // get css by ID
    var pixelcrackStyle = document.getElementById('pixelcrack-style');
    var terminalStyle = document.getElementById('terminal-style');

    // apply correct theme based on time
    if (hour >= 6 && hour < 22) {
        pixelcrackStyle.disabled = true; 
        terminalStyle.disabled = false;    
    } else {
        pixelcrackStyle.disabled = false;  
        terminalStyle.disabled = true;   
    }
}

applyThemeByTime();
