//time script
function updateClock() {
    const now = new Date();
    
    // time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // date
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    // combine date and time
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day} ${month} ${year} -`;
    
    // update clock
    document.getElementById('clock').textContent = `${dateString} ${timeString}`;
}

setInterval(updateClock, 1000);
updateClock();