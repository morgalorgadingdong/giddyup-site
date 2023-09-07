
<script>
    import TypeWriterText from "$lib/components/TypeWriterText.svelte";
	import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import ServicesCard from "$lib/components/ServicesCard.svelte";
    import ServicesCardActive from "$lib/components/ServicesCardActive.svelte";
    import { fade } from 'svelte/transition';
	  import ContactCard from "$lib/components/ContactCard.svelte";

    

    let services = [
        {
          service: "Web Design",
          description: "Branded and Beautiful - We create beautiful designs that perfectly reflect your brand identity while offering clean and intuitive navigation. Our approach combines aesthetics and usability, ensuring a visually pleasing and user-centered experience that will keep your customers engaged and informed.",
          number: 1,
          img: "./img/web-design.png",
          active: true
        },
        {
            service: 'Development',
            description: "Fast and Future-Ready - We leverage the latest and greatest in web development technologies to build lightning-fast, responsive websites and apps. Our approach ensures scalability, making future updates efficient and cost-effective. With us, you're not just building a website, but a long-term, adaptable digital presence.",
            number: 2,
            img: "./img/web-development.png",
            active: false
        },
        {
            service: 'SEO/SEM',
            description: "Visible & Valuable - We propel your website to the forefront with targeted SEO strategies and fine-tuned Google Ads. Our approach maximizes visibility and ROI, ensuring your content is engaging, attractive to search engines, and reaches the right audience at the right time.",
            number: 3,
            img: "./img/SEO-SEM.png",
            active: false
        },
        {
            service: 'Hosting',
            description: "Safe and Secure - We provide reliable web hosting services to ensure your website is accessible to your customers 24/7. With everything built from scratch and following modern best practices in cybersecurity, we ensure that your sensitive information stays private, while your site stays accessible 24/7.",
            number: 4,
            img: "./img/hosting.png",
            active: false
        },

    ]

    let activeService = services[0];

    

    function handleActiveSerice(event) {
      for (let i = 0; i < services.length; i++) {
        if (services[i].service == event.detail.service) {
          services[i].active = true;
        } else {
          services[i].active = false;
        }
      }
      // services.forEach(service => {
      //   if (service.service =  event.detail.service) {
      //     console.log('active service:' + service.service )
      //     service.active = true;
      //   } else {
      //     service.active = false;
      //   }
      // })
      activeService = event.detail;
    }
    

    let textArray = [
        "web design", 
        "web development",
        "seo services",
        "web hosting"
        ];


        let atTop = true;
    let position = 0;


    let card
    let cardHeight
    let mounted = false

    onMount(() => {
        card = document.querySelector('.active-card-container');
        cardHeight = card.offsetHeight;
        card.style.minHeight = cardHeight + 'px';
        mounted = true
    })
        
</script>


<section id="hero" class="col-12 d-flex align-content-center justify-content-center mt-0"> 
    <div id="typewriter" class="col-12 col-md-10 col-xl-8 d-flex justify-content-start flex-wrap align-content-center mb-5 mb-md-0 pb-5 pb-md-0">
      <!-- <h1 class="col-12 mb-3">Quality solutions in</h1> -->
      <!-- <h1 class="typewriter-text">web design</h1>   -->
      <h1 class="col-12 mb-3">Professional grade</h1>
      <TypeWriterText {textArray}/>
      <h1 class="cursor"></h1>
      <h1 class="col-12 mb-3">for small businesses and entrepreneurs</h1>
      <!-- <button class="btn-primary mx-4 my-5">work with us</button> -->
    </div>
</section>

<section id="services" class="col-12 d-flex align-content-center justify-content-center flex-wrap">
  <div class="col-12 col-md-10 col-xl-8 d-flex justify-content-center flex-wrap" >
  <h2 class="col-12 animate animate-left">services</h2>  
  <div id="services-top" class="col-12 d-flex align-items-center justify-content-between flex-wrap pt-0 pb-3 py-md-5 px-0">
        <h3 class="col-12 col-md-6 col-xl-5 col-xxl-4 d-flex justify-content-start align-content-center my-3 my-md-5 pl-0 pr-3 animate animate-left">Your customers are online, we'll help you meet them there.</h3>
        <div id="active-card-container" class="col-12 col-md-6 col-xl-7 col-xxl-8 px-0">
          <div id="" class="background-banner"></div>
          <div class="col-12 px-0 animate animate-right">
            <ServicesCardActive { ...activeService } />
          </div>
        </div>
        <div>
          <p></p>
        </div>
    </div>
    <div id="services-bottom" class="col-12 d-flex justify-content-between align-content-center flex-wrap px-0">
        <div class="services-card-container px-0 pl-0 animate-delay animate animate-left"><ServicesCard { ...services[0] } on:activeService={handleActiveSerice} /></div>
        <div class="services-card-container px-0 pl-0 animate-delay animate animate-left"><ServicesCard { ...services[1] } on:activeService={handleActiveSerice} /></div>
        <div class="services-card-container px-0 pl-0 animate-delay animate animate-left"><ServicesCard { ...services[2] } on:activeService={handleActiveSerice} /></div>
        <div class="services-card-container px-0 pl-0 animate-delay animate animate-left"><ServicesCard { ...services[3] } on:activeService={handleActiveSerice} /></div>
    </div>
  </div>
</section>

<section id="work" class="col-12 d-flex justify-content-center">
    <div class="col-12 col-md-10 col-xl-8 d-flex justify-content-center flex-wrap" >
      <h2 class="col-12 mb-5 animate animate-left">recent work</h2>
      <h3 class="col-12 animate animate-left">Oregon Bicycle Adventures</h3>
      <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left" style="background-image: url('img/oba-desktop.jpg')" onclick="location.href='https://oregonbicycleadventures.com'"></div>
        <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left" style="background-image: url('img/oba-mobile.jpg')" onclick="location.href='https://oregonbicycleadventures.com'"></div>
      </div>
      <!-- <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap">
        <span>web design</span>
        <span>web development</span>
        <span>logo design</span>
        <span>blog management</span>
        <span>hosting</span>

      </div> -->

      <div class="col-12 my-2"></div>

      <h3 class="col-12 mt-5 animate animate-left">Madaesthetics</h3>
      <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left three-d" style="background-image: url('img/madaesthetics-desktop.png')" onclick="location.href='madaesthetics.html'"></div>
        <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left three-d" style="background-image: url('img/madaesthetics-mobile.png')" onclick="location.href='madaesthetics.html'"></div>
      </div>
      <!-- <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap">
        <span>web design</span>
        <span>web development</span>
        <span>app development</span>
        <span>blog management</span>
        <span>hosting</span>
      </div> -->

      <div class="col-12 my-2"></div>

      <h3 class="col-12 mt-5 animate animate-left">Over The Boundary Fabrication</h3>
      <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left" style="background-image: url('img/otb-desktop.png')" onclick="location.href='https://www.otbfabrication.com'"></div>
        <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left" style="background-image: url('img/otb-mobile.png')" onclick="location.href='https://www.otbfabrication.com'"></div>
      </div>
      <!-- <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap">
        <span>web design</span>
        <span>web development</span>
        <span>copy writing</span>
        <span>blog management</span>
        <span>hosting</span>
        <span>SEO</span>
        
      </div> -->
<!-- <p>Originally contracted to build a simple wordpress site with a 24 hour turnaround, we recently revisited this project with the OTB Fabrication team to design and build them a brand new responsive website.</p> -->
      <!-- <div class="col-12 my-5"></div> -->

      <!-- <div class="col-12 d-flex justify-content-center work-img-container my-lg-5 my-3">
        <div class="img-desktop col-12 col-md-11 animate animate-left" style="background-image: url('img/ftre-desktop.png')" onclick="location.href='https://www.folzteamrealestate.com'"></div>
        <div class="img-mobile col-3 col-md-2 animate-delay animate animate-left" style="background-image: url('img/ftre-mobile.png')" onclick="location.href='https://www.folzteamrealestate.com'"></div>
      </div>
      <div class="col-12 my-lg-5 my-3 d-flex justify-content-start flex-wrap">
        <span>web design</span>
        <span>web development</span>
        <span>logo design</span>
        <span>copy writing</span>
        <span>blog management</span>
        <span>hosting</span>
      </div>

      <div class="col-12 my-5"></div> -->
    </div>
  </section>
  <section id="testimonial" class="col-12 d-flex justify-content-center align-content-center flex-wrap  animate animate-left">
    <div class="caption-bg-left col-12"></div>
    <div class="col-12 d-flex justify-content-center align-content-center caption-text-container">
      <!-- <h4 class="col-12 col-md-10 col-lg-6">Creating a beautiful website for your business shouldn't cost thousands of dollars or be a full time job. Giddyup exists to help small businesses leverage the power of technology to accomplish their goals, without breaking the bank or monopolizing their time.</h4> -->
      <!-- <h4 class="col-12 col-md-10 col-lg-8 col-xl-6">"Giddyup was very easy to work with. Morgan (giddyup owner) has a wide knowledge and understanding of coding and went above and beyond for our website. He was readily available to speak with us through the whole project. We trusted giddyup with our formatting, layouts and design and could not be happier with the end result." <br><br>-Buzz & Will, OTB Fabrication</h4> -->
      <!-- <h4 class="col-12 col-md-10 col-lg-8 col-xl-6">"Giddyup is incredible to work with. There is nothing to speak on where things could have been done better - a truly fantastic experience all round... We trusted giddyup with our formatting, layouts and design and could not be happier with the end result." <br><br>-Buzz & Will, OTB Fabrication</h4> -->
      <h4 class="col-12 col-md-10 col-lg-8 col-xl-6">"Morgan (giddyup owner) is incredible to work with, he has a wide knowledge and understanding of web design and went above and beyond for our website. We trusted giddyup with our website content, design and development and could not be happier with the end result." <br><br>-Buzz & Will, OTB Fabrication</h4>
    </div>
  </section>

  <section id="process" class="col-12 d-flex justify-content-center align-content-center flex-wrap section">
    <div class="col-12 col-md-10 col-xl-8 d-flex justify-content-center align-content-start flex-wrap animate animate-left my-5">
      <h2 class="col-12 mb-5">process</h2>
      <div class="col-12 col-sm-6 col-lg-3 d-flex justify-content-start align-content-start flex-wrap animate-delay animate animate-left">
        <h4 class="col-12 process-number">1.</h4>
        <h4 class="col-12">consultation</h4>
        <p class="col-12">We start our web design process by first determining your busines needs, objectives and goals that need to be met for your website. Based on that, we develop an appropriate project plan and realistic timeline.</p>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 d-flex justify-content-start align-content-start flex-wrap animate-delay animate animate-left">
        <h4 class="col-12 process-number">2.</h4>
        <h4 class="col-12">design</h4>
        <p class="col-12">In the design phase, we create a tailor made design for your website based on our previous discussions. We work closley with you in this phase to insure the design meets your needs and expectations</p>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 d-flex justify-content-start align-content-start flex-wrap animate-delay animate animate-left">
        <h4 class="col-12 process-number">3.</h4>
        <h4 class="col-12">develop</h4>
        <p class="col-12">Once you have signed off on the design, we begin the process of building your app or website. We place a heavy emphasis on responsiveness and SEO, to insure your design not only translates well onto any device, but will be easy to find via search engines.</p>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 d-flex justify-content-start align-content-start flex-wrap animate-delay animate animate-left">
        <h4 class="col-12 process-number">4.</h4>
        <h4 class="col-12">launch</h4>
        <p class="col-12">The live launch of your site or app can be an exciting and stressful time. That's why we provide full monitoring and support during the launch period (90 days): if any issue should arise within the launch period, we will fix it free of charge.</p>
      </div>
    </div>
  </section> 

  <section id="contact" class="col-12 d-flex justify-content-center section align-content-center">
    <div class="col-12 col-md-10 col-xl-8 d-flex justify-content-center align-content-center flex-wrap animate animate-left my-5">
      <!-- <h2 class="col-12 mb-5">contact</h2> -->
      <div class="col-12 col-lg-8 d-flex justify-content-center flex-wrap">
        <h6 class="col-12 text-left text-md-center">Ready to establish an <b>intentional digital presence</b> for your business?</h6>
        <!-- <h6 class="col-12">Drop us a line below and we'll get back to you asap.</h6> -->
        <!-- <h6 class="col-12 text-center">Use the form below or shoot us an email at info@giddyupdigital.com and we’ll get back to you as soon as we can.</h6> -->
      </div>
      <div class="col-12 col-lg-6 justify-content-center text-center mt-5">
        <ContactCard />
      </div>
    </div>
  </section>





  <style>

    #testimonial h4 {
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 2rem;
    }

    #contact h6 {
      font-size: 2rem;
      font-weight: 500;
    }

    h6 b {
      color: var(--color-secondary);
      font-weight: 500;
    }

    /* section {
      margin: 5rem auto;
    } */


    .background-banner {
      background-color: var(--color-secondary);
      opacity: 0.5;
      height: 60%;
      width: 1000%;
      position: absolute;
      left: -200%;
      top: 20%;
      z-index: 0;
    }
 
    #services-top {
      z-index: 0;
    }

    #services-top h3 {
      z-index: 2;
    }

    .services-icon {
      max-height: 128px;
      max-width: 80%;
    }

    .services-card-container {
      width: 48%;
      margin-bottom: 4vw;
    }


    @media (min-width: 768px) {
      .services-card-container {
        max-width: 23% !important;
      }
    }

    @media (min-width: 1440px) {
      .background-banner {
        height: 70%;
        top: 15%;
      }
    }


  </style>