// initial state for our game
px = py = 10;
gs = ts = 20;
ax = ay = 15;
xv = yv = 0;

boyd = [];
segments = 5;


// logic for game

const game = () => {
    px += xv
    py += yv;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#2ED9EB';

    if(px < 0) {
        px = ts -1;
    }
    if(px > ts - 1) {
        px = 0;
    };
    if(py < 0) {
        py = ts -1;
    };
    if(py > ts -1) {
        py = 0;
    }

    for(let i=0; i < body.length; i++) {
        cxt.fillRect(body[i].x * gs, body[i].y * gs, gs - 2, gs -2);
        if(body[i].x === px && body[i].y === py) {
            segments = 5;
        }
    }

    body.push({x: px, y: py});

    while(body.length > segments) {
        body.shift();
    };
    

}




// D-Pad control
const keyDown = e => {
    switch (e.keyCode) {
        case (37):
            console.log('left')
            break;
        case (38):
            console.log('up')
            break;
        case (39):
            console.log('right')
            break;
        case (40):
            console.log('down')
            break;
    }
}

const init = () => {
    canvas = document.getElementById('game')
    ctx = canvas.getContext('2d');
    document.addEventListener('keydown', keyDown)
    setInterval(game, 1000 / 15);
}

// window.onload = init();
document.addEventListener("DOMContentLoaded", init)
