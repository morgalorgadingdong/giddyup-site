<script lang="ts">
    import type { PageData } from './$types';
    import ContactCard from '$lib/components/ContactCard.svelte';
    
    export let data: PageData;
</script>

<section id="contact" class="col-12 d-flex justify-content-center section align-content-center">
    <div class="col-12 col-md-10 col-xl-8 d-flex justify-content-center align-content-center flex-wrap my-5">
      <!-- <h2 class="col-12 mb-5">contact</h2> -->
      <div class="col-12 d-flex justify-content-center flex-wrap">
        <!-- <h6 class="col-12 col-lg-6">Ready to establish an intentional digital presence for your business?</h6>
        <div class="col-12"></div> -->
        <h6 class="col-12 col-lg-6">Drop us a line below and we'll get back to you asap!</h6>
        <!-- <h6 class="col-12 text-center">Use the form below or shoot us an email at info@giddyupdigital.com and we’ll get back to you as soon as we can.</h6> -->
      </div>
      <div class="col-12 col-lg-6 justify-content-center text-center mt-5">
        <ContactCard />
    </div>
    </div>
</section>

