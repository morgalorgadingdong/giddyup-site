let activeCardContainer = document.getElementById('active-card-container');
let containerHeight
setTimeout(function () {
    containerHeight = activeCardContainer.offsetHeight;
    console.log(activeCardContainer.offsetHeight);
    containerHeight = containerHeight + 24
    activeCardContainer.style.minHeight = containerHeight + 'px';
    
    console.log(containerHeight);
    
}, 500);



