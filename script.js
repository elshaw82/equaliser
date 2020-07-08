var myColours = [
        "#F8969E", 
        "#F8B2AC",
        "#F8D4BC",
        "#DCE9C4",
        "#B0E4D1",
        "#C2C8E4",
        "#55CBD4",
        "#FCB68C",
        "#F96786",
        "#FEFFBF", 
]

const columns = document.querySelectorAll('.column').forEach(item => {
    item.addEventListener('mouseover', event => {   
        item.setAttribute("style", `background-color: ${myColours[Math.floor(Math.random() * myColours.length)]}`);
        item.classList.add('hover');
        item.addEventListener('animationend', event => {
            item.classList.remove('hover');
            item.removeAttribute('style');
        })
    })
})

