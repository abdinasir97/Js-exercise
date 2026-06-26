function changeImage(){
    const image = document.querySelector('#image')
    const url = prompt("please enter image url");
    const border = prompt("please enter image border color");
    const width = prompt("please enter image width in px");
    const hight= prompt("please enter image hight in px");
    const borderradius = prompt("please enter image border-radius");
    image.setAttribute ('src',url)
    image.style.border = "2px solid red"
    image.style.width = '20px'
    image.style.hight = '8px'
    image.style.borderradius = '3px'
}


