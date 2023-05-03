gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

// scrollBtn display
tl.to('#l-anchor', {
  scrollTrigger: {
    trigger: '#center',
    start: 'top',
    // markers: true, // 區間標註
    toggleClass: { targets: '#l-anchor', className: 'is-pagetop' },
  },
});
// scrollTop changeColor
tl.to('.l-pagetop', {
  scrollTrigger: {
    trigger: '.newsUpdateBlock', //觸及到的目標
    start: 'top 200px',
    end: 'bottom 30%',
    // markers: true, // 區間標註
    toggleClass: { targets: '.is-pagetop', className: 'is-white' },
  },
});

tl.to('.l-pagetop', {
  scrollTrigger: {
    trigger: '.competitionResultsBlock', //觸及到的目標
    start: 'top 200px',
    end: 'bottom',
    // markers: true, // 區間標註
    toggleClass: { targets: '.is-pagetop', className: 'is-white' },
  },
});
//scrollTo
const goTopBtn = document.querySelector('.l-pagetop');
goTopBtn.addEventListener('click', () => {
  gsap.to(window, { duration: 0.3, scrollTo: { y: 0 } });
});

const goFooterBtn = document.querySelector('.l-scroll');
goFooterBtn.addEventListener('click', () => {
  gsap.to(window, { duration: 0.3, scrollTo: '.scrollDownFocus' });
});
