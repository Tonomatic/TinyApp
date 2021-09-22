document.addEventListener("DOMContentLoaded", () => {

    const left = document.getElementById('left')
    const right = document.getElementById('right')

    const arr = ['app', 'blog', 'shop', 'note', 'grave']

    left.addEventListener("click", (e) => {
        console.dir(e.target)
        console.log(`you clicked this ${e}`)
    })

    right.addEventListener("click", (e) => {
        console.log(`you clicked this ${e}`)
    })
})
