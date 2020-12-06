const bars = document.querySelector('.bars')
const close = document.querySelector('.cross')
const parent = document.querySelector('.parent')
const navLinks = document.querySelector('.nav-links')
console.log(parent)
bars.addEventListener('click', () => {
    bars.style.top = '-30px';
    close.style.left = '25px';
    parent.classList.add("active");
    navLinks.style.transform = 'translateX(0)';
})
close.addEventListener('click', () => {
    bars.style.top = '35px';
    close.style.left = '-25px';
    parent.classList.remove("active");
    navLinks.style.transform = 'translateX(-200%)';
})