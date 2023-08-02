let body = document.getElementById('the-body')
// setTimeout(loadBody(), '10000000')
// function loadBody() {
//     body.classList.remove('is-preload')
//     console.log('reveal')
// }

setTimeout(function() {
    body.classList.add('is-preload-reveal')
    // setTimeout(function() {
    //     body.classList.remove('is-preload')
    // }, '500')
}, '500')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal')
      }
    })
  })
  const animateElements = document.querySelectorAll('.animate')
  // animateElements.append(document.querySelectorAll('animate-top'))
//   console.log(animateElements)
  animateElements.forEach((el) => observer.observe(el));


  const backToTop = document.getElementById('back-to-top')
  console.log(backToTop)

    document.body.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.opacity = '1';
    } else {
        backToTop.style.opacity = '0';
    }
    })