<script>
	import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import BackToTop from '$lib/components/BackToTop.svelte';
	// import './style.css';

    

</script>



<div class="app">
	<main>
        <Header />
        <BackToTop />
		<slot/>
        <Footer />
	</main>
	
</div>

<style>


</style>