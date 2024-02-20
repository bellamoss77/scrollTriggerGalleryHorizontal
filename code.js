document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    let sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                toggleAction: 'play reverse play reverse',
                markers: false,
            }
        });

        gsap.set(section, { autoAlpha: 1 });

        const animationDuration = 4;

        if ((index + 1) % 3 === 0) {
            tl.fromTo(section, { xPercent: 100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: 'power2', duration: animationDuration })
              .fromTo(section, { xPercent: 0 }, { xPercent: -100, ease: 'power2', duration: animationDuration}, '+=0.5');
        } else if ((index + 1) % 2 === 0) {
            tl.fromTo(section, {xPercent: -100 }, { xPercent: 0, ease: 'power2', duration: animationDuration })
            .fromTo(section, { xPercent: 0 }, { xPercent: 100, ease: 'power2', duration: animationDuration}, '+=0.5');
        } else {
            tl.fromTo(section, { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2', duration: animationDuration })
              .to(section, {autoAlpha: 0, scale: 0.5, rotation: 360, ease: 'power2', duration: animationDuration });
        }
    })
})






