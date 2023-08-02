<script>
	import { onMount } from "svelte";

    /**
	 * @type {any}
	 */
     export let textArray;


     

    let i = 0,
        a = 0,
        isBackspacing = false,
        firstTime = true;

    let speedForward = 100, //Typing Speed
        speedWait = 1500, // Wait between typing and backspacing
        speedBetweenLines = 1000, //Wait between first and second lines
        speedBackspace = 50;
    
    function typeWriter(id, ar) {
        let element = document.getElementById(id)
        let aString = ar[a]
        let newString
        let eHeader = document.getElementsByClassName(`typewriter-text`)
        eHeader = eHeader[0]
        //Header element
        // let eParagraph = element.children("p"); //Subheader element
        if (firstTime) {
            firstTime = false
            isBackspacing = true
        }
        // Determine if animation should be typing or backspacing
        if (!isBackspacing) { 
            // If full string hasn't yet been typed out, continue typing
            if (i < aString.length) {
            newString = eHeader.innerHTML
            newString = newString.concat(aString.charAt(i))
            eHeader.innerHTML = newString
            i++
            setTimeout(function(){ typeWriter(id, ar); }, speedForward);   
            // If full string has been typed, switch to backspace mode.
            } else if (i == aString.length) {
            isBackspacing = true;
            setTimeout(function(){ typeWriter(id, ar); }, speedWait);
            }
        // If backspacing is enabled
        } else {
            // If the header still has text, continue backspacing
            if (eHeader.innerHTML.length > 0) {
                eHeader.innerHTML = eHeader.innerHTML.substring(0, eHeader.innerHTML.length - 1);
                setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
            // If neither head or paragraph still has text, switch to next quote in array and start typing.
            } else { 
            isBackspacing = false;
            i = 0;
            a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
            setTimeout(function(){ typeWriter(id, ar); }, 50);
            }
        }
    } // End of typeWriter function

    // let eHeader = document.getElementsByClassName(`typewriter-text`)
    //     eHeader = eHeader[0]
    //     eHeader.innerHTML = textArray[0]
    onMount(() => {
        
        setTimeout(function() {
            typeWriter("typewriter", textArray);
        }, '2500')
    });
</script>


<h1 class="typewriter-text">
    {textArray[0]}
</h1>

