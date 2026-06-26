const colorpicker = document.querySelector('#colorpicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistory = document.querySelector('#clearHistory');


colorpicker.addEventListener('input',function(){
    const selectedColor = colorpicker.value;
    colorPreview.style.backgroundColor = selectedColor;
    addColortoHistory(selectedColor)

})

function addColortoHistory(color){
    const li = document.createElement('li');
    li.textContent = color
    li.style.color = color
    colorHistory.appendChild(li);
}

clearHistory.addEventListener('click',function(){
    colorHistory.innerHTML =''
})

