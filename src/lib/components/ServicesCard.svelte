<script>
    import { createEventDispatcher } from 'svelte';


    export let service;
    export let description;
    export let number;
    export let img;
    export let active;


    const dispatch = createEventDispatcher();

function setActiveService() {
    // active = true;
    dispatch(
        'activeService',
        {
            service: service,
            description: description,
            number: number,
            img: img
        }
    );
}


</script>

<div class="card p-2 p-md-3 {active ? 'active' : undefined}" on:click={setActiveService}>
    <div class="col-12 d-flex justify-content-between px-0 align-items-end services-icon-container">
        <p class="card-number mb-0 mr-2">{number}.</p>
        <img src={img} alt={service} class="services-icon mx-0 my-0"/>
    </div>
    
    <p class="card-name mb-0">{service}</p>
</div>



<style>
    .card {
        transition: all 0.5s ease-in-out;
    }

    .card.active {
        box-shadow: -4px 4px 4px 0px var(--color-secondary);
        transition: all 0.5s ease-in-out;
    }

    .card:hover {
        cursor: pointer;
    }

    /* .services-icon-container {
        min-height: 128px !important;
    } */

    .services-icon {
      max-height: 128px;
      max-width: 50%;
    }


    .card-number {
        font-size: 2rem;
        font-weight: 500;
        color: var(--color-secondary);
        font-family: var(--font-header);
    }

    .card-name {
        font-size: 1.2rem;
    }

    @media (min-width: 576px) {
        .services-icon {
            max-width: 50%;
        }
    }



</style>