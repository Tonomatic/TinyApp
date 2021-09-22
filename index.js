document.addEventListener("DOMContentLoaded", () => {

    //constants and i index
    const left = document.getElementById('left')
    const right = document.getElementById('right')
    const location = document.getElementById('location')
    const conta = document.querySelector('.container')
    const color = "rgb(46, 217, 235)";
    const arr = ['app', 'blog', 'shop', 'note', 'game', 'grave']
    let i = 0;

    //intial sets
    location.innerHTML = ` ${arr[i]}`
    location.style.color = color


    left.addEventListener("click", (e) => {
        if (i === 0) i = arr.length - 1;
        else i--;

        location.innerHTML = ` ${arr[i]}`
        if (arr[i] === 'grave') {
            conta.style.backgroundColor = "black";
            conta.style.color = "grey"
            location.style.color = "purple"
        } else {
            conta.style.backgroundColor = "white";
            conta.style.color = "black"
            location.style.color = color
        }
    })

    right.addEventListener("click", (e) => {
        if (i === arr.length - 1) i = 0;
        else i++;

        location.innerHTML = ` ${arr[i]}`
        if (arr[i] === 'grave') {
            conta.style.backgroundColor = "black";
            conta.style.color = "grey"
            location.style.color = "purple"
        } else {
            conta.style.backgroundColor = "white";
            conta.style.color = "black"
            location.style.color = color
        }
    })
})
