<script>
    import { page } from "$app/stores";
</script>

<header id="top" class="col-12 d-flex justify-content-center">
    <nav class="col-12 col-xl-11 mt-xl-3 d-flex justify-content-between align-content-center">
      <a id="navlogo-container" class="d-flex justify-content-start align-content-center" href='/' data-sveltekit-reload>
        <img class="logo-icon" src="img/logo-icon.png"/>
        <h2 class="logo-font">/ giddyup</h2>
      </a>
      <div id="menuToggle" class="px-3 d-lg-none position-absolute">
        <input type="checkbox" />
        <span class=""></span>
        <span class=""></span>
        <span class=""></span>
        <ul id="menu" class="">
          <a href="portfolio" data-sveltekit-reload><li> {#if $page.url.pathname.startsWith('/portfolio')} <b class="px-1">/</b>{/if}portfolio</li></a>
          <!-- <a href="/services"><li>services</li></a> -->
          <!-- <a href="blog" data-sveltekit-reload><li>{#if $page.url.pathname.startsWith('/blog')} <b class="px-1">/</b>{/if}blog</li></a> -->
          <a href="about" data-sveltekit-reload><li>{#if $page.url.pathname.startsWith('/about')} <b class="px-1">/</b>{/if}about</li></a>
          <a href="contact" data-sveltekit-reload><li>{#if $page.url.pathname.startsWith('/contact')} <b class="px-1">/</b>{/if}contact</li></a>
        </ul>
      </div>
      <ul class="d-lg-flex d-none justify-content-between align-items-center">
        <a href="portfolio"><li> {#if $page.url.pathname.startsWith('/portfolio')} <b class="px-1">/</b>{/if} portfolio</li></a>
          <!-- <a href="#process"><li>services</li></a> -->
          <!-- <a href="blog" data-sveltekit-reload><li>{#if $page.url.pathname.startsWith('/blog')} <b class="px-1">/</b>{/if}blog</li></a> -->
          <a href="about" data-sveltekit-reload><li>{#if $page.url.pathname.startsWith('/about')} <b class="px-1">/</b>{/if}about</li></a>
          <a href="contact" data-sveltekit-reload><li>{#if $page.url.pathname.startsWith('/contact')} <b class="px-1">/</b>{/if}contact</li></a>
      </ul> 
    </nav>
  </header>


  <style>
    b {
      font-weight: bold;
    }
  </style>