document.addEventListener("DOMContentLoaded", () => {

    const left = document.getElementById('left')
    const right = document.getElementById('right')
    const location = document.getElementById('location')

    const arr = ['app', 'blog', 'shop', 'note', 'game', 'grave']
    let i = 0;
    location.innerHTML = ` ${arr[i]}`
    location.style.color = "rgb(46, 217, 235)"
    left.addEventListener("click", (e) => {
        if (i === 0) {
            i = arr.length - 1;
        } else {
            i--;
        }
        location.innerHTML = ` ${arr[i]}`
    })

    right.addEventListener("click", (e) => {
        if (i === arr.length - 1) {
            i = 0;
        } else {
            i++;
        }
        location.innerHTML = ` ${arr[i]}`
    })
})
