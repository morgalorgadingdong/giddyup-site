let stackContainer = document.querySelector('.stack-container');
    let stackArray = stackContainer.children;
    let currentFront = null;

function bringToFront(e) {
    // If user clicked on front slide, return it to default
    if (e.target === currentFront) {
        resetDefaultPosition(currentFront)
        currentFront = null;
        return;
    } else {
        if (currentFront) {
            resetDefaultPosition(currentFront)
        }
        setFront(e.target)
        currentFront = e.target;
        
    }

    
    
}

    function setFront(stack) {
        stack.classList.add('stack-front');
        stack.classList.add('scale-up');
    }

    function resetDefaultPosition(stack) {
        stack.classList.remove('scale-up');
        stack.classList.remove('stack-front');
    }
    

// Event listener for mouseleave on the container
stackContainer.addEventListener('mouseleave', function() {
    // replace this forEach with a normal for loop
    for (let i = 0; i < stackArray.length; i++) {
        console.log(stackArray[i])
        if (stackArray[i] === currentFront) {
            console.log('current front')
            resetDefaultPosition(stackArray[i]);
        }
    }
    currentFront = null;
});