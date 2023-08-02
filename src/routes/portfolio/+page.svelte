<script>
    import ContactCard from "$lib/components/ContactCard.svelte";
</script>

<section id="work" class="col-12 d-flex justify-content-center">
    <div class="col-12 col-md-10 col-xl-8 d-flex justify-content-center flex-wrap" >
      <!-- <h2 class="col-12 mt-3 animate-bottom animate-delay animate ">portfolio</h2> -->
      <h3 class="col-12 mt-5">Oregon Bicycle Adventures</h3>
      <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left" style="background-image: url('img/oba-desktop.jpg')" onclick="location.href='https://oregonbicycleadventures.com'"></div>
      <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left" style="background-image: url('img/oba-mobile.jpg')" onclick="location.href='https://oregonbicycleadventures.com'"></div>
    </div>
    <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap px-0">
      <span>website design & development</span>
      <span>online bookings</span>
      <span>online store</span>
      <span>blog management</span>
      <span>hosting</span>
    </div>
      
      <h3 class="col-12 mt-5">madaesthetics</h3>
      <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left" style="background-image: url('img/madaesthetics-desktop.png')" onclick="location.href='madaesthetics.html'"></div>
        <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left" style="background-image: url('img/madaesthetics-mobile.png')" onclick="location.href='madaesthetics.html'"></div>
      </div>
      <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap px-0 px-0">
        <span>website design & development</span>
        <span>client management dashboard</span>
        <span>online store</span>
        <span>hosting</span>
      </div>

      <div class="col-12 my-5"></div>
      <h3 class="col-12 mt-5">OTB Fabrication</h3>
      <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left" style="background-image: url('img/otb-desktop.png')" onclick="location.href='https://www.otbfabrication.com'"></div>
        <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left" style="background-image: url('img/otb-mobile.png')" onclick="location.href='https://www.otbfabrication.com'"></div>
      </div>
      <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap px-0">
        <span>website design & development</span>
        <span>content strategy</span>
        <span>copy writing</span>
        <span>hosting</span>
      </div>

      <div class="col-12 my-5"></div>

      <h3 class="col-12 mt-5">Folz Team Real Estate</h3>
      <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left" style="background-image: url('img/ftre-desktop.png')" onclick="location.href='https://www.folzteamrealestate.com'"></div>
        <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left" style="background-image: url('img/ftre-mobile.png')" onclick="location.href='https://www.folzteamrealestate.com'"></div>
      </div>
      <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap px-0">
        <span>website design & development</span>
        <span>logo design</span>
        <span>content strategy</span>
        <span>blog management</span>
        <span>hosting</span>
      </div>

      <div class="col-12 my-5"></div>

      <h3 class="col-12 mt-5">Cabin Rental Site</h3>
      <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left" style="background-image: url('img/cabin-desktop.png')" onclick="location.href='https://cabinrental.netlify.app/'"></div>
        <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left" style="background-image: url('img/cabin-mobile.png')" onclick="location.href='https://cabinrental.netlify.app/'"></div>
      </div>
      <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap px-0">
        <span>website design & development</span>
        <span>photography</span>
        <span>hosting</span>
      </div>
    </div>
  </section>

  <section id="contact" class="col-12 d-flex justify-content-center section align-content-center">
    <div class="col-12 col-md-10 col-xl-8 d-flex justify-content-center align-content-center flex-wrap animate animate-left my-5">
      <!-- <h2 class="col-12 mb-5">contact</h2> -->
      <div class="col-12 col-lg-8 d-flex justify-content-center flex-wrap">
        <h6 class="col-12 text-left text-md-center">Ready to establish an intentional digital presence for your business?</h6>
        <!-- <h6 class="col-12">Drop us a line below and we'll get back to you asap.</h6> -->
        <!-- <h6 class="col-12 text-center">Use the form below or shoot us an email at info@giddyupdigital.com and we’ll get back to you as soon as we can.</h6> -->
      </div>
      <div class="col-12 col-lg-6 justify-content-center text-center mt-5">
        <ContactCard />
      </div>
    </div>
  </section>