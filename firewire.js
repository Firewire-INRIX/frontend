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
