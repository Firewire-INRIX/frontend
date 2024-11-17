//get the mapButton
const mapButton = document.getElementById('map-button');
let counter = 0;

// Add an event listener to the button for the 'click' event
mapButton.addEventListener('click', function() {
    const info = document.querySelector('.info-display');
    const map = document.querySelector('.map-display');
    
    counter++;
    const sizeSetting = (counter % 3)+1; // Add 1 to shift results to 1, 2, 3
    
    //depending on sizeSetting, shift size of info and map displays
    if(sizeSetting ===1){
        map.style.width = '50%';
        info.style.width = '50%';
    }
    else if(sizeSetting === 2){
        map.style.width = '70%';
        info.style.width = '30%';
    }
    else if(sizeSetting === 3)
    {
        map.style.width = '30%';
        info.style.width = '70%';
    }

});

const resizer = document.getElementById('resizer');
const info = document.querySelector('.info-display');
const map = document.querySelector('.map-display');
let isDragging = false;

// Mouse down event: Start dragging
resizer.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.body.style.cursor = 'ew-resize'; // Change cursor
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Mouse move event: Resize panels
function onMouseMove(e) {
    if (!isDragging) return;

    // Calculate new width for .info-display
    const containerWidth = document.querySelector('main').offsetWidth;
    const newInfoWidth = (e.clientX / containerWidth) * 100; // Convert to percentage

    // Apply new widths & constraints
    if (newInfoWidth > 10 && newInfoWidth < 90) {
        info.style.width = `${newInfoWidth}%`;
        map.style.width = `${100 - newInfoWidth}%`;
    }
}

// Mouse up event: Stop dragging
function onMouseUp() {
    isDragging = false;
    document.body.style.cursor = 'default'; // Reset cursor
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}
