
// Lovable-style: trigger when 30% visible, only once
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.pop-up').forEach(el => {
        el.classList.add('show');
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.panel').forEach(panel => {
  observer.observe(panel);
});
