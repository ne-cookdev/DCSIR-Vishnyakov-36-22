"use sctrict"

let elem = document.getElementById('elem');

function animate({
    timing,
    draw,
    duration
}) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;

        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else {
            if (!isElementInViewport(elem)) {
                elem.style.top = 50 + '%';
                elem.style.left = 50 + '%';
            }
        }
    })
}

function linear(timeFraction) {
    return timeFraction;
}

function inOutQuad(n) {
    n *= 2;
    if (n < 1) return 0.5 * n * n;
    return -0.5 * (--n * (n - 2) - 1);
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


let elTop = elem.offsetTop;
let elLeft = elem.offsetLeft;
let randDistanceTop = getRandomNumber(80, 200);
let randDirectionTop = getRandomNumber(-1, 1);
let randDistanceLeft = getRandomNumber(80, 200);
let randDirectionLeft = getRandomNumber(-1, 1);

function draw(progress) {
    elem.style.top = elTop + progress * randDistanceTop * randDirectionTop + 'px';
    elem.style.left = elLeft + progress * randDistanceLeft * randDirectionLeft + 'px';
}

function isElementInViewport(elem) {
    let rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

elem.addEventListener("click", function () {
    elTop = elem.offsetTop;
    randDistanceTop = getRandomNumber(80, 200);
    randDirectionTop = getRandomNumber(-1, 1);
    if (!randDirectionTop) {
        randDirectionTop = 1;
    }
    elLeft = elem.offsetLeft;
    randDistanceLeft = getRandomNumber(80, 200);
    randDirectionLeft = getRandomNumber(-1, 1);
    if (!randDirectionLeft) {
        randDirectionLeft = 1;
    }
    animate({
        duration: 2000,
        timing: inOutQuad,
        draw: draw
    })

    animateBack({
        duration: 300,
        timing: inOutQuad,
        draw: drawBack
    })
})



function animateBack({
    timing,
    draw,
    duration
}) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;

        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    })
}

function drawBack(progress) {
    document.body.style.background = 'rgb(' + progress * 255 + ', ' + progress * 255 + ', ' + progress * 255 + ')';
}
