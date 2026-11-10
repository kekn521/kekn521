'use strict';

const atlasContent = {
  research: { title: 'A closer look at 3D reconstruction', description: 'Vis4GS connects visible artifacts with the Gaussian primitives and training history behind them.', link: '#research', label: 'Visit the project' },
  questions: { title: 'From seeing patterns to understanding behavior', description: 'I’m curious about visual analytics for understanding AI models, including vision-language-action systems.', link: '#questions', label: 'Explore this direction' },
  about: { title: 'Learning and researching at NTHU', description: 'I’m a first-year ISA master’s student in VM Lab, advised by Dr. Shih-Hsuan Hung (Kevin).', link: '#about', label: 'A little about me' },
  life: { title: 'Coffee, games, and time to recharge', description: 'Away from research, I enjoy making pour-over coffee, playing games, and working out.', link: '#off-duty', label: 'Meet the off-duty Ken' }
};

document.querySelectorAll('[data-atlas]').forEach(button => {
  button.addEventListener('click', () => {
    const item = atlasContent[button.dataset.atlas];
    document.querySelectorAll('[data-atlas]').forEach(other => {
      const selected = other === button;
      other.classList.toggle('is-active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('atlas-title').textContent = item.title;
    document.getElementById('atlas-description').textContent = item.description;
    const link = document.getElementById('atlas-link');
    link.href = item.link;
    link.replaceChildren(document.createTextNode(item.label + ' '));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(arrow);
  });
});

const coffeeArt = document.getElementById('scene-art').innerHTML;
const interests = {
  coffee: { title: 'One cup, a slower moment.', description: 'A little time away from the screen, making a pour-over.', note: 'a small daily pleasure', art: coffeeArt },
  games: { title: 'A different kind of exploration.', description: 'Off duty, I enjoy spending time playing games.', note: 'room for a little play', art: '<svg viewBox="0 0 360 250"><ellipse class="scene-shadow" cx="180" cy="210" rx="112" ry="13"/><path d="M106 78q-23 1-36 50l-13 49q-7 40 24 27l44-35h110l44 35q31 13 24-27l-13-49q-13-49-36-50Z" fill="#f4f9fd" stroke="#799bb6" stroke-width="3"/><path d="M163 78v-17q0-20 20-20t20-22" class="steam"/><path d="M105 105v43m-21-22h43" stroke="#547c9c" stroke-width="13" stroke-linecap="round"/><circle cx="250" cy="111" r="9" fill="#8faecc"/><circle cx="270" cy="132" r="9" fill="#b2c7db"/><circle cx="230" cy="132" r="9" fill="#b2c7db"/><circle cx="250" cy="153" r="9" fill="#8faecc"/><circle cx="151" cy="153" r="15" fill="#d4e3ef" stroke="#92adc4" stroke-width="2"/><circle cx="205" cy="153" r="15" fill="#d4e3ef" stroke="#92adc4" stroke-width="2"/><path d="M168 116h8m10 0h8" stroke="#80583f" stroke-width="4" stroke-linecap="round"/></svg>' },
  workout: { title: 'Time to move.', description: 'Working out is another part of my life outside the lab.', note: 'a change of pace', art: '<svg viewBox="0 0 360 250"><ellipse class="scene-shadow" cx="180" cy="209" rx="112" ry="13"/><g transform="rotate(-16 180 135)"><rect x="85" y="119" width="190" height="24" rx="9" fill="#a0bacf" stroke="#6f91ac" stroke-width="3"/><rect x="78" y="80" width="35" height="105" rx="10" fill="#c6dcec" stroke="#7698b3" stroke-width="3"/><rect x="54" y="96" width="25" height="74" rx="8" fill="#e2edf6" stroke="#7698b3" stroke-width="3"/><rect x="247" y="80" width="35" height="105" rx="10" fill="#c6dcec" stroke="#7698b3" stroke-width="3"/><rect x="282" y="96" width="25" height="74" rx="8" fill="#e2edf6" stroke="#7698b3" stroke-width="3"/><path d="M151 123v16m12-16v16m12-16v16m12-16v16m12-16v16m12-16v16" stroke="#6f91ac" stroke-width="2"/></g><path d="m141 57-6-17m25 11 3-17m-44 30-15-10" stroke="#9fb8cc" stroke-width="3" stroke-linecap="round"/></svg>' }
};

document.querySelectorAll('[data-interest]').forEach(button => {
  button.addEventListener('click', () => {
    const item = interests[button.dataset.interest];
    document.querySelectorAll('[data-interest]').forEach(other => {
      const selected = other === button;
      other.classList.toggle('is-active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    // All SVG markup is authored locally above; no visitor input is rendered.
    document.getElementById('scene-art').innerHTML = item.art;
    document.getElementById('interest-title').textContent = item.title;
    document.getElementById('interest-description').textContent = item.description;
    document.getElementById('interest-note').textContent = item.note;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
