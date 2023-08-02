<script>
   
    // $: console.log('scroll' + position)
    // $: if (position > 300) {
    //         console.log("show")
    //         atTop = false;
    //     } else {
    //         console.log("hide")
    //         atTop = true;
    //     }

</script>

<!-- <svelte:window bind:scrollY={position} /> -->



<div id="back-to-top" class="">
    <a href="#top"> <i class="fas fa-angle-up"></i></a>
  </div>




  <style>
    #back-to-top {
        opacity: 0;
        transition: all 0.5s;
    }

    #back-to-top a {
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        position: fixed;
        bottom: 50px;
        right: 40px;
        width: 50px;
        height: 40px;
        margin: 0px;
        font-size: 18px;
        background: black;
        color: white;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        z-index: 999; 
        box-shadow: -2px 2px 4px var(--color-secondary);}
        #back-to-top a:hover {
            color: var(--color-secondary);
            box-shadow: -4px 4px 8px var(--color-secondary);
        text-decoration: none; }
        #back-to-top a:focus {
            color: var(--color-secondary); 
        }


    #back-to-top.active {
        opacity: 1;
        pointer-events: auto;
    }

    
  </style>