const WHATSAPP_NUMBER = '5586994455611'; // Troque para o número comercial com DDI/DDD, ex: 5586999999999
const CTA_TEXT = 'Olá! Quero conhecer o BarberFlow e fazer uma demonstração.';

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CTA_TEXT)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

const navBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('[data-nav]');
navBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navBtn.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const slider = document.querySelector('[data-slider]');
if (slider) {
  const slides = [...slider.querySelectorAll('.slide')];
  const dotsWrap = slider.querySelector('[data-dots]');
  let current = 0;
  const dots = slides.map((_, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.ariaLabel = `Ir para slide ${i + 1}`;
    btn.addEventListener('click', () => show(i));
    dotsWrap.appendChild(btn);
    return btn;
  });
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  slider.querySelector('.prev')?.addEventListener('click', () => show(current - 1));
  slider.querySelector('.next')?.addEventListener('click', () => show(current + 1));
  show(0);
  setInterval(() => show(current + 1), 6500);
}
