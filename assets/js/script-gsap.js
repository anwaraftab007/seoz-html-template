(function ($) {
    'use strict';


     // Section Title Animation
      if ($('.char-animation').length > 0) {
      let char_come = gsap.utils.toArray(".char-animation");
      char_come.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'

          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
        gsap.set(splitTextLine, { perspective: 300 });
        itemSplitted.split({ type: "chars, words" })
        tl.from(itemSplitted.chars,
          {
            duration: 0.3,
            delay: 0.3,
            x: 100,
            autoAlpha: 0,
            stagger: 0.05
          });
      });
    }

})(jQuery);