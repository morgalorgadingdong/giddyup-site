<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { browser } from '$app/environment';

    export let service;
    export let description;
    export let number;
    export let img;
    export let active;

    let show = true;

    let card
    let cardHeight
    let mounted = false

    onMount(() => {
        card = document.querySelector('.card');
        cardHeight = card.offsetHeight;
        card.style.minHeight = cardHeight + 'px';
        mounted = true
    })


    $: {
        show = false
        setTimeout(() => {
            show = service !== "";
        }, 300);
    }


    

    


</script>

<div class="card {show ? 'active' : 'undefined'}" transition:fly>
    
    {#if show}
        <div class="card-inner col-12 p-0 m-0" transition:fade>
            <div class="col-12 d-flex justify-content-between px-0 align-items-end">
                <p class="card-number mb-0">{number}.</p>
                <img src={img} alt={service} class="mx-0 services-icon"/>
            </div>
            
            <p class="card-name">{service}</p>
            
            <p>{description}</p>
            
            
        </div>
        {/if}
    
</div>




<style>
    .card.active {
        box-shadow: -4px 4px 4px 0px var(--color-secondary);
        transition: all 0.5s ease-in-out;
    }

    .card {
        box-shadow: 0px 0px 0px 0px var(--color-secondary);
        transition: all 0.5s ease-in-out;
    }

    .services-icon {
      max-height: 128px;
      max-width: 30%;
    }

    .card-number {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-secondary);
    }

    .card-name {
        font-size: 1.5rem;
    }
</style>