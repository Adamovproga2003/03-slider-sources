const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const countSlides = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeIndex = 0
sideBar.style.top = `-${(countSlides - 1) * 100}vh`

upBtn.addEventListener('click', (e) => {
    changeSlide('up')
})

downBtn.addEventListener('click', (e) => {
    changeSlide('down')
})

const changeSlide = direction => {
    if (direction === 'up') {
        activeIndex++
        if (activeIndex === countSlides) {
            activeIndex = 0
        }

    } else if (direction === 'down') {
        activeIndex--
        if (activeIndex < 0) {
            activeIndex = countSlides - 1
        }

    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeIndex * height}px)`
    sideBar.style.transform = `translateY(${activeIndex * height}px)`
}