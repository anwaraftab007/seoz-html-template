/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";
    const API = 'https://credahead-backend.onrender.com';
    // const API = 'http://localhost:5000';
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contact-form');
        if (!form) return; // Exit if no form on page
      
        const modal = createModal(); // Inject modal into DOM
        document.body.appendChild(modal);
      
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
      
        form.addEventListener('submit', async function (e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';

  const formData = {
    name: form.querySelector('#name')?.value || '',
    email: form.querySelector('#email2')?.value || '',
    phone: form.querySelector('#phone')?.value || '',
    subject: form.querySelector('#subject')?.value || '',
    message: form.querySelector('#message')?.value || '',
  };

  try {
    const res = await fetch(`${API}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    showModal(data.msg);
    form.reset(); // 👈 clear fields after success
  } catch (err) {
    console.error('Submission error:', err);
    showModal('Something went wrong!');
    form.reset(); // 👈 even on error, reset form
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
});


        
      
        function createModal() {
          const modal = document.createElement('div');
          modal.id = 'custom-modal';
          modal.style.display = 'none';
          modal.innerHTML = `
            <div class="modal-overlay">
              <div class="modal-box">
                <p id="modal-message">...</p>
                <button onclick="closeModal();" id="modal-close-btn">Close</button>
              </div>
            </div>
          `;
      
          modal.querySelector('#modal-close-btn').addEventListener('click', () => {
            modal.style.display = 'none';
          });
      
          return modal;
        }
      
        function showModal(message) {
          const modal = document.getElementById('custom-modal');
          if (!modal) return;
      
          modal.querySelector('#modal-message').innerText = message;
          modal.style.display = 'flex';
        }
      });
      document.addEventListener('DOMContentLoaded', function () {
        const reqForm = document.getElementById('req-form');
        if (!reqForm) return;
    
        const modal = createModal(); // reuse same modal logic
        document.body.appendChild(modal);
    
        const submitBtn = reqForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
    
        reqForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';

  const formData = {
    name: reqForm.querySelector('#name')?.value || '',
    email: reqForm.querySelector('#email2')?.value || '',
    phone: reqForm.querySelector('#phone')?.value || '',
    organizationName: reqForm.querySelector('#organizationName')?.value || '',
    subject: reqForm.querySelector('#subject')?.value || '',
    message: reqForm.querySelector('#message')?.value || '',
  };

  try {
    const res = await fetch(`${API}/api/send-demo-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    showModal(data.msg);
    reqForm.reset(); // 👈 clear fields after success
  } catch (err) {
    console.error('Submission error:', err);
    showModal('Something went wrong!');
    reqForm.reset(); // 👈 even on error, reset form
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
});

    
        function createModal() {
          const modal = document.createElement('div');
          modal.id = 'custom-modal';
          modal.style.display = 'none';
          modal.innerHTML = `
            <div class="modal-overlay">
              <div class="modal-box">
                <p id="modal-message">...</p>
                <button onclick="closeReqModal(); closeModal();" id="modal-close-btn">Close</button>
              </div>
            </div>
          `;
    
          modal.querySelector('#modal-close-btn').addEventListener('click', () => {
            modal.style.display = 'none';
          });
    
          return modal;
        }
    
        function showModal(message) {
          const modal = document.getElementById('custom-modal');
          if (!modal) return;
    
          modal.querySelector('#modal-message').innerText = message;
          modal.style.display = 'flex';
        }
      });
    $(document).ready( function() {


        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });


        //>> Wow Animation Start <<//
        new WOW().init();

         //>> Video Popup Start <<//
         $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {}
        });


        //>> Wow Animation Start <<//
        new WOW().init();
        $('#contactModal').on('shown.bs.modal', function () {
            wow.sync();  // Recalculate wow elements in modal
          });
        //>> Nice Select Start <<//
        $('select').niceSelect();

        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });

        //>> Destination Hover Js Start <<//
        const getSlide = $('project-wrapper, .project-image-items').length - 1;
        const slideCal = 100 / getSlide + '%';
        
        $('.project-wrapper').css({
            "width": slideCal
        });
        
        $(document).on('mouseenter', '.project-image-items', function() {
            $('.project-image-items').removeClass('active');
            $(this).addClass('active');
        });     
       

        //>> Brand Slider Start <<//
        if($('.brand-slide-2').length > 0) {
            const BrandSlide2 = new Swiper(".brand-slide-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 7,
                    },
                    991: {
                        slidesPerView: 6,
                    },
                    767: {
                        slidesPerView: 5,
                    },
                    575: {
                        slidesPerView: 4,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                },
            });
        }

        //>> Project Slider Start <<//
        if($('.project-slider-3').length > 0) {
            const projectSlider3 = new Swiper(".project-slider-3", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                     991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Testimonial Slider Start <<//
        if($('.testimonial-slider-3').length > 0) {
            const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                     991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.testimonial-slider-1').length > 0) {
            const testimonialSlider1 = new Swiper(".testimonial-slider-1", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                     991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.testimonial-slider-4').length > 0) {
            const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                 navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },

                 pagination: {
                    el: ".dot",
                    clickable: true,
                },
            });
        }


        gsap.utils.toArray(" .appear_left").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "-=150" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	    });

        gsap.utils
		.toArray(".zoom-effect-style")
		.forEach((el, index) => {
			let tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: "top 80%",
					end: "buttom 60%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tl1.set(el, { transformOrigin: "center center" }).from(
				el,
				{ scale: 0.7 },
				{
					background: "inherit",
					scale: 1,
					duration: 1,
					immediateRender: false,
				}
			);
		});

        gsap.utils.toArray(" .item_left_1").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "-=365" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	    });

        gsap.utils.toArray(" .item_left_2").forEach((el, index) => {
            let tlcta = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    scrub: 2,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            });

            tlcta
                .set(el, { transformOrigin: "center center" })
                .from(
                    el,
                    { opacity: 1, x: "-=365" },
                    { opacity: 1, x: 0, duration: 1, immediateRender: false }
                );
        });

        gsap.utils.toArray(" .item_right_1").forEach((el, index) => {
            let tlcta = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    scrub: 2,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            });

            tlcta
                .set(el, { transformOrigin: "center center" })
                .from(
                    el,
                    { opacity: 1, x: "+=365" },
                    { opacity: 1, x: 0, duration: 1, immediateRender: false }
                );
        });

        gsap.utils.toArray(" .item_right_2").forEach((el, index) => {
            let tlcta = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    scrub: 2,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            });

            tlcta
                .set(el, { transformOrigin: "center center" })
                .from(
                    el,
                    { opacity: 1, x: "+=365" },
                    { opacity: 1, x: 0, duration: 1, immediateRender: false }
                );
        });

         // choose-5-img
        if (document.querySelector('.agn-choose-5-img')) {
            var agnChoose5img = gsap.timeline({
                scrollTrigger: {
                    trigger: ".agn-choose-5-img",
                    start: "top 90%",
                    toggleActions: "play reverse play reverse",
                    markers: false,
                },
                defaults: {
                    ease: "ease5",
                    duration: 0.4,
                },
            });
        
            agnChoose5img.from(".agn-choose-5-img", {
                transformOrigin: "bottom left",
                transform: "rotate(62deg) translate(-152px, 86px)",
            });
        }


        //>> Back To Top Slider Start <<//
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });

        $(document).on('click', '#back-top', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

        
    }); // End Document Ready Function


    //>> Prealoader Start <<//
    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }

    loader();
    const comment = document.createComment(" Designed by Anwar Aftab ");
    const html = document.documentElement;
    const body = document.body;

    if (html && body && html.contains(body)) {
        html.insertBefore(comment, body);
    }
})(jQuery); // End jQuery

