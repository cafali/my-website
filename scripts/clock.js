function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const year = 1999; 
    //const year = now.getFullYear();
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day} ${month} ${year} -`;
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = `${dateString} ${timeString}`;
    }
}

function showLoadingMessage() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = 'Loading time...';
    }
}

showLoadingMessage();
setTimeout(() => {
    updateClock();
    setInterval(updateClock, 1000);
}, 1);
