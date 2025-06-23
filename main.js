const slider = document.querySelector('.slider')
const list = document.querySelector('.list')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const nav = document.querySelector('nav')
const a = nav.getElementsByTagName('a')

next.addEventListener('click', () => {
    initSlider('next')
})

prev.addEventListener('click', () => {
    initSlider('prev')
})

// auto play
let runAutoPlay = setTimeout(() => {
    next.click()
},15000)

const initSlider = (type) => {
    const sliderItems = list.querySelectorAll('.item')

    if (type === 'next') {
        list.appendChild(sliderItems[0])
        slider.classList.add('next')
    } else {
        const lastItemsPosition = sliderItems.length - 1
        list.prepend(sliderItems[lastItemsPosition])
        slider.classList.add('prev')
    }

    updateNavbarLinks();

    setTimeout(() => {
        slider.classList.remove('next')
        slider.classList.remove('prev')
    }, 2000)
    
    clearTimeout(runAutoPlay)
    runAutoPlay = setTimeout(() => {
        next.click()
    }, 15000)
    
    
}

const updateNavbarLinks = () => {
    const firstItem = list.querySelector('.item'); 
    const theme = firstItem?.dataset.theme;
    const loadingBar = document.querySelector('.loading-bar');

    const themeClasses = [
        'tohka', 'yoshino', 'kurumi', 'kotori',
        'yamai', 'miku', 'natsumi', 'origami', 'nia', 'mukuro', 'mio'
    ];

   
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove(...themeClasses);
    }

   
    if (loadingBar) {
        loadingBar.classList.remove(...themeClasses);
    }


    if (theme) {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.add(theme);
        }

        if (loadingBar) {
            loadingBar.classList.add(theme);
        }
    }
};



