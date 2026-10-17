function portfolio() {
  return {
    mobileMenu: false,
    activeFilter: 'All',
    phoneScreen: 'canteen',
    selectedProject: null,
    filters: ['All', 'Flutter', 'Full-stack', 'Web'],
    projects: [
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
        url: '#'
      },
      {
        name: 'Dual Tap Game',
        kicker: 'MOBILE GAME / 002',
        type: 'FLUTTER GAME',
        tone: 'game',
        category: 'Flutter',
        tags: ['Flutter', 'Dart', 'Game Logic', 'Play Store Prep'],
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
        short: 'A placement workflow concept to bring student and placement activities into one system.',
        description: 'A Campus Placement Management System built as a MERN-stack project. It explores the workflows involved in organizing placement information and bringing student-facing and administration needs into one web platform.',
        focus: 'Full-stack CRUD flows, structured data, and practical role-based workflows.',
        stack: 'MongoDB, Express.js, React, Node.js',
        url: '#'
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
        url: '#'
      }
    ],
    get filteredProjects() {
      if (this.activeFilter === 'All') return this.projects;
      if (this.activeFilter === 'Web') return this.projects.filter(project => project.category === 'Full-stack');
      if (this.activeFilter === 'Full-stack') return this.projects.filter(project => project.category === 'Full-stack');
      return this.projects.filter(project => project.tags.some(tag => tag.toLowerCase().includes('flutter')));
    },
    init() {
      this.$watch('selectedProject', value => {
        document.body.classList.toggle('modal-open', Boolean(value));
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          this.selectedProject = null;
          this.mobileMenu = false;
        }
      });
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const art = card.querySelector('.project-art');
      if (art) art.style.setProperty('--pointer-glow', `${50 + x * 18}% ${50 + y * 18}%`);
    });
    card.addEventListener('pointerleave', () => {
      const art = card.querySelector('.project-art');
      if (art) art.style.removeProperty('--pointer-glow');
    });
  });
});