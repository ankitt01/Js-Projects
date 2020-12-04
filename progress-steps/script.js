const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++;
    if(currentActive>circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive<1) {
        currentActive = 1;
    }
    update();
})

function update() {
    circles.forEach((circle,index) => {
        if(index<currentActive){
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
        if(currentActive === 1) {
            prev.disabled = true
            prev.style.cursor = 'not-allowed'
            next.style.cursor = 'pointer'
        } else if(currentActive === circles.length) {
            next.disabled = true
            next.style.cursor = 'not-allowed'
            prev.style.cursor = 'pointer'
        } else {
            prev.disabled = false
            next.disabled = false
        }
    })
    
}