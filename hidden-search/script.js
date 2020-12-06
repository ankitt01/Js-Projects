const btn = document.querySelector('.btn')
const input = document.querySelector('.search')

btn.addEventListener('click', () => {
    input.style.width = '200px';
    input.focus();
})
function focusout() {
    input.style.width = '35px';
}
