const PROJECTS = [
  {
    name: 'Smart Canteen',
    kicker: 'MOBILE APP / 001',
    type: 'FLUTTER + BACKEND',
    tone: 'canteen',
    category: 'Flutter',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Admin Dashboard'],
    short: 'A campus canteen experience built around quicker ordering and practical admin workflows.',
    description: 'A canteen app concept built with Flutter and a Node.js/MongoDB backend, with an admin dashboard for managing the day-to-day workflow. Designed to make the ordering experience simpler for students and operations easier to manage.',
    focus: 'Mobile-first ordering flows, clear information hierarchy, and an admin workflow.',
    stack: 'Flutter, Node.js, MongoDB',
    url: ''
  },
  {
    name: 'Dual Tap Game',
    kicker: 'MOBILE GAME / 002',
    type: 'FLUTTER GAME',
    tone: 'game',
    category: 'Flutter',
    tags: ['Flutter', 'Dart', 'Game Logic', 'Android'],
    short: 'A fast, focused tapping game where timing and a clean feedback loop do the talking.',
    description: 'A Flutter tapping game focused on simple controls, quick reactions, and replayable gameplay. The project has a public GitHub repository and has also been part of an Android release and Play Console preparation workflow.',
    focus: 'Responsive touch interaction, game state, and a compact mobile experience.',
    stack: 'Flutter, Dart',
    url: 'https://github.com/Naveed-Ahmed-21/Dual-Tap-Game'
  },
  {
    name: 'Campus Placement System',
    kicker: 'WEB PLATFORM / 003',
    type: 'MERN STACK',
    tone: 'campus',
    category: 'Full-stack',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    short: 'A placement workflow system that brings student and placement activities into one web platform.',
    description: 'A Campus Placement Management System built as a MERN-stack project. It explores the workflows involved in organizing placement information and bringing student-facing and administration needs into one web platform.',
    focus: 'Full-stack CRUD flows, structured data, and practical role-based workflows.',
    stack: 'MongoDB, Express.js, React, Node.js',
    url: ''
  },
  {
    name: 'Full-stack ToDo',
    kicker: 'PRODUCTIVITY / 004',
    type: 'FLUTTER + API',
    tone: 'todo',
    category: 'Full-stack',
    tags: ['Flutter', 'Node.js', 'REST API', 'JWT'],
    short: 'A task manager that connects a Flutter interface to a real backend workflow.',
    description: 'A full-stack ToDo app combining a Flutter client with backend API integration. The focus is the complete flow—not only the UI—including request handling and authenticated interactions.',
    focus: 'API integration, task state, and clear interaction feedback.',
    stack: 'Flutter, Node.js, REST APIs, JWT',
    url: ''
  }
];

const PROJECT_FILTERS = ['All', 'Flutter', 'Full-stack', 'Web'];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function artMarkup(project, index) {
  const top = `<span class="art-index">${String(index + 1).padStart(2, '0')}</span><span class="art-type">${escapeHTML(project.type)}</span>`;
  const open = '<div class="project-open" aria-hidden="true">↗</div>';
  const art = {
    campus: `<div class="campus-art"><div class="campus-header"><span>campus<span>hub.</span></span><span class="campus-menu">☰</span></div><div class="campus-welcome">Your campus,<br><i>connected.</i></div><div class="campus-cards"><div class="campus-mini"><span>◫</span><b>Resources</b><small>Learn at your pace</small></div><div class="campus-mini campus-mini-lime"><span>⌘</span><b>Communities</b><small>Find your people</small></div></div><div class="campus-bottom"><span>⌂</span><span>◇</span><span>▤</span><span>○</span></div></div>`,
    canteen: `<div class="canteen-art"><div class="canteen-top"><span>SMART CANTEEN</span><span>● OPEN</span></div><div class="canteen-title">Good food.<br><i>Zero queue.</i></div><div class="food-plate"><div class="plate-bowl"><span>✳</span><b>FRESH<br>PICKS</b></div></div><div class="canteen-order"><span>Today's special</span><b>South Indian combo <em>₹80</em></b><small>ORDER AHEAD ↗</small></div></div>`,
    game: `<div class="game-art"><div class="game-caption"><span>DUAL TAP</span><span>GAME / 001</span></div><div class="game-title">REFLEX<br><i>MODE</i></div><div class="game-graphic"><div class="game-circle circle-one">TAP</div><div class="game-circle circle-two">TAP</div><div class="game-cross">+</div></div><div class="game-foot"><span>BUILT IN FLUTTER</span><span>PLAY ↗</span></div></div>`,
    todo: `<div class="todo-art"><div class="todo-top"><span>MONDAY / 09:41</span><span>✳</span></div><div class="todo-title">Do the<br><i>work.</i></div><div class="todo-task done"><span>✓</span><b>Map out the idea</b><small>09:00</small></div><div class="todo-task"><span>○</span><b>Build the first version</b><small>10:30</small></div><div class="todo-task"><span>○</span><b>Make it feel right</b><small>14:00</small></div><div class="todo-progress"><span></span></div></div>`
  };
  return top + (art[project.tone] || '') + open;
}

function renderProjectCard(project, index) {
  const tags = project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
  return `<article class="project-card project-${project.tone}" tabindex="0" role="button" aria-label="View details for ${escapeHTML(project.name)}" data-project="${escapeHTML(project.name)}">
    <div class="project-art art-${project.tone}">${artMarkup(project, index)}</div>
    <div class="project-meta"><div><div class="project-kicker">${escapeHTML(project.kicker)}</div><h3>${escapeHTML(project.name)}</h3></div><span class="project-arrow">↗</span></div>
    <p class="project-description">${escapeHTML(project.short)}</p>
    <div class="tag-list">${tags}</div>
  </article>`;
}

function renderPhone(screen) {
  const content = {
    canteen: {
      greeting: 'Good afternoon,',
      heading: 'What sounds good?',
      date: 'FRESH PICKS · CAMPUS CANTEEN',
      body: `<div class="mock-food"><div class="food-art"><span class="food-leaf">✳</span><div class="food-bowl"><i></i><i></i><i></i><b></b></div></div><div class="mock-item"><span>Chef's special</span><b>Masala bowl</b><small>Fresh · Hot · Local</small></div><div class="mock-price">₹80 <span>↗</span></div></div>`
    },
    game: {
      greeting: 'Ready. Set.',
      heading: 'Tap your focus.',
      date: 'DUAL TAP · REACTION GAME',
      body: `<div class="game-preview"><div class="game-top"><span>BEST SCORE</span><b>0248</b></div><div class="tap-orbs"><span class="orb-a">TAP</span><span class="orb-b">TAP</span></div><div class="game-bar"><span></span></div><small>REACTION MODE · LEVEL 04</small></div>`
    },
    focus: {
      greeting: 'Hey, Naveed.',
      heading: 'Make today count.',
      date: 'YOUR SPACE, YOUR PACE',
      body: `<div class="focus-preview"><div class="focus-ring"><span>25:00</span><small>FOCUS TIME</small></div><div class="focus-task"><span class="task-check">✓</span><span><b>Ship the next idea</b><small>Deep work · 1 task</small></span></div><div class="focus-task"><span class="task-empty"></span><span><b>Review the details</b><small>Design · 20 min</small></span></div></div>`
    }
  }[screen];
  const phone = document.querySelector('.phone-screen');
  if (!phone || !content) return;
  phone.className = 'phone-screen screen-' + screen;
  phone.innerHTML = `<div class="phone-status"><span>9:41</span><span>▮ ▴ ▰</span></div><div class="app-topline"><span class="app-symbol">n<span>.</span></span><span class="app-avatar">NA</span></div><div class="app-greeting">${content.greeting}</div><div class="app-heading">${content.heading}</div><div class="app-date">${content.date}</div>${content.body}<div class="phone-bottom"><span class="bottom-active">⌂</span><span>◇</span><span>▤</span><span>○</span></div>`;
  document.querySelectorAll('.preview-switcher button').forEach(button => {
    button.classList.toggle('active', button.dataset.screen === screen);
    button.setAttribute('aria-pressed', String(button.dataset.screen === screen));
  });
}

function visibleProjects(filter) {
  if (filter === 'All') return PROJECTS;
  if (filter === 'Flutter') return PROJECTS.filter(project => project.tags.some(tag => tag.toLowerCase().includes('flutter')));
  if (filter === 'Full-stack' || filter === 'Web') return PROJECTS.filter(project => project.category === 'Full-stack');
  return PROJECTS;
}

function renderFilters(activeFilter) {
  const container = document.querySelector('.project-filters');
  if (!container) return;
  container.innerHTML = PROJECT_FILTERS.map(filter => `<button type="button" class="${filter === activeFilter ? 'active' : ''}" data-filter="${escapeHTML(filter)}" aria-pressed="${filter === activeFilter}">${escapeHTML(filter)}</button>`).join('');
}

function renderProjects(filter) {
  const projects = visibleProjects(filter);
  const grid = document.querySelector('.project-grid');
  if (!grid) return;
  grid.innerHTML = projects.map((project, index) => renderProjectCard(project, index)).join('');
  const count = document.querySelector('.project-toolbar .mono-label span');
  if (count) count.textContent = '/ ' + String(projects.length).padStart(2, '0');
  grid.querySelectorAll('.project-card').forEach(card => {
    const open = () => showProject(card.dataset.project);
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
    card.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = card.getBoundingClientRect();
      const art = card.querySelector('.project-art');
      if (art) art.style.setProperty('--pointer-glow', `${50 + ((event.clientX - rect.left) / rect.width - .5) * 18}% ${50 + ((event.clientY - rect.top) / rect.height - .5) * 18}%`);
    });
    card.addEventListener('pointerleave', () => card.querySelector('.project-art')?.style.removeProperty('--pointer-glow'));
  });
}

function showProject(name) {
  const project = PROJECTS.find(item => item.name === name);
  const modal = document.querySelector('.project-modal');
  if (!project || !modal) return;
  const tags = project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
  const action = project.url
    ? `<a class="button button-primary modal-github" href="${project.url}" target="_blank" rel="noreferrer">View source on GitHub <span>↗</span></a>`
    : `<p class="modal-hint">A direct repository link isn't connected here yet. Check the GitHub profile for related source code.</p>`;
  modal.innerHTML = `<div class="modal-panel"><button class="modal-close" type="button" aria-label="Close project details">✕</button><div class="modal-eyebrow">${escapeHTML(project.kicker)}</div><h2>${escapeHTML(project.name)}</h2><p class="modal-desc">${escapeHTML(project.description)}</p><div class="modal-tags">${tags}</div><div class="modal-highlights"><div class="modal-highlight"><span>01</span><b>Focus</b><p>${escapeHTML(project.focus)}</p></div><div class="modal-highlight"><span>02</span><b>Stack</b><p>${escapeHTML(project.stack)}</p></div></div>${action}</div>`;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').addEventListener('click', closeProject);
  modal.onclick = event => { if (event.target === modal) closeProject(); };
  modal.querySelector('.modal-close').focus();
}

function closeProject() {
  const modal = document.querySelector('.project-modal');
  if (modal) modal.hidden = true;
  document.body.classList.remove('modal-open');
}

function initPortfolio() {
  let currentFilter = 'All';
  renderFilters(currentFilter);
  renderProjects(currentFilter);
  renderPhone('canteen');

  document.querySelector('.project-filters')?.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    currentFilter = button.dataset.filter;
    renderFilters(currentFilter);
    renderProjects(currentFilter);
  });

  document.querySelectorAll('.preview-switcher button').forEach((button, index) => {
    button.dataset.screen = ['canteen', 'game', 'focus'][index];
    button.addEventListener('click', () => renderPhone(button.dataset.screen));
  });

  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  menuButton?.addEventListener('click', () => {
    const open = mobileMenu.hidden;
    mobileMenu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    menuButton?.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('click', event => {
    if (mobileMenu && !mobileMenu.hidden && !mobileMenu.contains(event.target) && !menuButton?.contains(event.target)) {
      mobileMenu.hidden = true;
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeProject();
      if (mobileMenu) mobileMenu.hidden = true;
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });
  const year = document.querySelector('.footer-time span');
  if (year) year.textContent = new Date().getFullYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio, { once: true });
} else {
  initPortfolio();
}