function adjustViewport() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    console.log(`Screen width: ${screenWidth}, Screen height: ${screenHeight}`);

    const body = document.body;

    if (screenWidth < 1921 || screenHeight < 1081) {  //res
        console.log('Applying zoom: 0.85');
        body.style.zoom = '0.85'; // value
    } else {
        console.log('Resetting zoom: 1');
        body.style.zoom = '1';
    }
}

// Run on load and resize
document.addEventListener('DOMContentLoaded', adjustViewport);
window.addEventListener('resize', adjustViewport);