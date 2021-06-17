const slides = document.querySelectorAll('.slide')

function slidesPlugin(active = 0) {
    slides[active].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClass()
            slide.classList.add('active')
        })
    }

    function clearActiveClass() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(2)