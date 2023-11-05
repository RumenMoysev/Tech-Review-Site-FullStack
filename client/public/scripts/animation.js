const options = {
    rootMargin: '-35% 0px -8% 0px',
//   threshold: 0.3
};

const observer = new IntersectionObserver((e) =>{
    e.forEach(el => {
        if(el.isIntersecting) {
            el.target.classList.add('show')
        } else {
            // el.target.classList.remove('show')
        }
    })
}, options)

const hiddenElems = document.querySelectorAll('.hidden')
hiddenElems.forEach((el) => observer.observe(el))