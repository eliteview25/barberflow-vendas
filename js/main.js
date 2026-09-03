(() => {
  'use strict';

  // Mantém a viewport presa no eixo X em navegadores/WebViews mobile.
  const lockHorizontalViewport = () => {
    if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
  };
  addEventListener('scroll', lockHorizontalViewport, { passive: true });


  // Troque somente esta URL caso o cadastro do SaaS mude de domínio.
  const SIGNUP_URL = 'https://barberflow-saas.onrender.com/cadastro.html';

  document.querySelectorAll('[data-signup]').forEach(link => {
    link.href = SIGNUP_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const slider = document.querySelector('[data-slider]');
  if (slider) {
    const slides = [...slider.querySelectorAll('.slide')];
    const dots = slider.querySelector('[data-dots]');
    const counter = slider.querySelector('[data-slide-counter]');
    let current = 0;
    let touchStart = 0;

    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Ir para demonstração ${i + 1}`);
      b.addEventListener('click', () => go(i));
      dots?.appendChild(b);
    });

    const dotButtons = dots ? [...dots.children] : [];
    function go(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
      dotButtons.forEach((dot, i) => dot.classList.toggle('active', i === current));
      if (counter) counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    }
    slider.querySelector('.prev')?.addEventListener('click', () => go(current - 1));
    slider.querySelector('.next')?.addEventListener('click', () => go(current + 1));
    slider.addEventListener('touchstart', e => { touchStart = e.changedTouches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStart;
      if (Math.abs(dx) > 45) go(current + (dx < 0 ? 1 : -1));
    }, { passive: true });
    go(0);
  }

  const roleContent = {
    dono: { label: 'PERFIL DONO', title: 'Visão completa da operação.', text: 'Dashboard, faturamento, metas, equipe, pagamentos, marketing, configurações e segurança em uma única visão.', items: ['Indicadores e financeiro', 'Gestão da equipe', 'Configurações e automações', 'Segurança da conta'] },
    gerente: { label: 'PERFIL GERENTE', title: 'Controle operacional sem ruído.', text: 'Acompanhe agenda, clientes, equipe, pagamentos e rotina da barbearia sem precisar acessar configurações que não fazem parte do dia a dia.', items: ['Agenda e atendimento', 'Clientes e serviços', 'Equipe operacional', 'Pagamentos autorizados'] },
    recepcao: { label: 'PERFIL RECEPÇÃO', title: 'Tudo que a recepção precisa na mão.', text: 'Agenda clara, contato rápido com clientes e aprovação operacional de Pix manual sem atravessar telas desnecessárias.', items: ['Agenda do dia', 'Contato por WhatsApp', 'Clientes e reservas', 'Confirmação de Pix manual'] },
    barbeiro: { label: 'PERFIL BARBEIRO', title: 'Agenda pessoal, sem excesso de informação.', text: 'O profissional acompanha seus horários, clientes e perfil, respeitando o expediente e o intervalo configurado.', items: ['Próximos atendimentos', 'Foto e perfil profissional', 'Horários de trabalho', 'Intervalo de almoço'] }
  };
  const roleTabs = document.querySelector('[data-role-tabs]');
  const rolePanel = document.querySelector('[data-role-panel]');
  if (roleTabs && rolePanel) {
    roleTabs.addEventListener('click', e => {
      const btn = e.target.closest('[data-role]');
      if (!btn) return;
      roleTabs.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
      const data = roleContent[btn.dataset.role];
      rolePanel.innerHTML = `<span class="role-icon">◆</span><small>${data.label}</small><h3>${data.title}</h3><p>${data.text}</p><ul>${data.items.map(x => `<li>${x}</li>`).join('')}</ul>`;
    });
  }

  const cycleButtons = [...document.querySelectorAll('[data-cycle]')];
  const prices = [...document.querySelectorAll('.price[data-monthly]')];
  const notes = [...document.querySelectorAll('[data-annual-note]')];
  cycleButtons.forEach(btn => btn.addEventListener('click', () => {
    const annual = btn.dataset.cycle === 'annual';
    cycleButtons.forEach(b => b.classList.toggle('active', b === btn));
    prices.forEach(price => {
      price.querySelector('strong').textContent = annual ? price.dataset.annual : price.dataset.monthly;
    });
    notes.forEach(note => note.classList.toggle('show', annual));
  }));

  const reveal = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add('visible');
    });
  };
  reveal();
  addEventListener('scroll', reveal, { passive: true });
})();
