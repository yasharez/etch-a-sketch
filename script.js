let etchASketch = document.querySelector('.container');

//Function that makes a grid for the input grid-size
function makeGrid (gridInput) {
    etchASketch.setAttribute('style', `grid-template-columns: repeat(${gridInput}, 1fr); grid-template-rows: repeat(${gridInput}, 1fr)`);
    for(i = 1; i < gridInput + 1; i++){
        for(j = 1; j < gridInput + 1; j++){
            let div = document.createElement('div');
            etchASketch.appendChild(div);
            div.classList.add('empty-pixel');
            div.setAttribute('style', `grid-column: ${i} / ${i + 1}; grid-row: ${j} / ${j + 1}`);
        };
    };
    const pixels = document.querySelectorAll('.empty-pixel');
    pixels.forEach((div) => {
        div.addEventListener('mouseenter', function(){
            div.classList.add('draw');
        });
    });
};

//Function that clears drawing on button click
function clearEtchASketch(){
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', function(){
        const pixels = document.querySelectorAll('.empty-pixel');
        pixels.forEach((div) => {
            div.classList.remove('draw');
        });
    });
};

//Event Listener for changes to slider and updating the grid on etch a sketch
const slider = document.getElementById('grid-slider');
const sliderValue = document.getElementById('slider-value');
sliderValue.textContent = slider.defaultValue;
slider.addEventListener('change', function(){
    clearEtchASketch();
    makeGrid(slider.value);
    sliderValue.textContent = slider.value;
});

makeGrid(slider.defaultValue);
clearEtchASketch();