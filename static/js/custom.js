let activeCardContainer = document.getElementById('active-card-container');
let containerHeight

let serviceCardContainer = document.querySelectorAll('.services-icon-container');
let serviceCardContainerHeight = serviceCardContainer[0].offsetHeight;
console.log(serviceCardContainerHeight);

setTimeout(function () {
    containerHeight = activeCardContainer.offsetHeight;
    console.log(activeCardContainer.offsetHeight);
    containerHeight = containerHeight + 24
    activeCardContainer.style.minHeight = containerHeight + 'px';
    for (let i = 0; i < serviceCardContainer.length; i++) {
        serviceCardContainer[i].style.minHeight = serviceCardContainerHeight + 'px';
    }
    console.log(containerHeight);
    
}, 500);



