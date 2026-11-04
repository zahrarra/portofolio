/**
 * Playful Illustrative Portfolio - Interactive Logic
 * Faithfully preserving the whimsical Stitch visual style & adding rich interactivity.
 */

// Portfolio showcase projects data for Table of Contents
const portfolioData = {
  brand: {
    title: '1. BRAND IDENTITY',
    icon: '🎨',
    desc: 'Thoughtful visual systems, charming logos, and brand guidelines combining storytelling with playful warmth.',
    projects: [
      {
        name: 'ATBP. Expo 2025 Branding',
        role: 'Creative Director',
        year: '2025',
        tags: ['Identity', 'Exhibition Design', 'Typography'],
        description: 'Complete visual identity including mascot illustrations, banners, catalogs, and wayfinding signage for the annual multimedia showcase.'
      },
      {
        name: 'Palamara Films Identity',
        role: 'Production & Graphic Designer',
        year: '2024',
        tags: ['Film Studio', 'Branding', 'Stationery'],
        description: 'Visual identity system for an independent film production house, featuring custom typography and cinematic merchandise packaging.'
      },
      {
        name: 'Batangueñong Grupo sa Sining',
        role: 'Visual Artist',
        year: '2023 - 2024',
        tags: ['Cultural Collective', 'Logo System'],
        description: 'Revitalized identity honoring Batangas folk culture, featuring handcrafted calligraphy and regional color palettes.'
      }
    ]
  },
  social: {
    title: '2. SOCIAL MEDIA',
    icon: '📱',
    desc: 'High-engagement social layouts, motion stickers, aesthetic story templates, and informative carousel graphics.',
    projects: [
      {
        name: 'UB Student Government Campaigns',
        role: 'Public Relations Officer',
        year: '2024',
        tags: ['Instagram', 'Infographics', 'Student Engagement'],
        description: 'Visual campaign strategies that boosted student council post reach by 180% through colorful illustrated guides and timely updates.'
      },
      {
        name: 'CineMMediA Social Feeds',
        role: 'Graphic Designer',
        year: '2025',
        tags: ['Promo Assets', 'Event Countdown', 'Motion Stills'],
        description: 'Promotional countdowns, speaker announcements, and ticketing launch graphics for the regional film festival.'
      },
      {
        name: 'Freelance Lifestyle & Creator Kits',
        role: 'Freelance Designer',
        year: '2024 - Present',
        tags: ['Canva Pro Kits', 'Carousels', 'Covers'],
        description: 'Bespoke illustrated social media toolkits and editable templates for content creators, authors, and indie shops.'
      }
    ]
  },
  posters: {
    title: '3. POSTERS',
    icon: '📜',
    desc: 'Compelling film posters, editorial broadsides, and event banners with strong visual hierarchy and bespoke illustrations.',
    projects: [
      {
        name: 'Bihag ng Dialysis (Official Documentary Poster)',
        role: 'Director, Screenwriter & Poster Designer',
        year: '2025',
        tags: ['Film Poster', 'Key Art', 'Typography'],
        description: 'Official theatrical key visual for the documentary film exploring the courage of dialysis patients and their families.'
      },
      {
        name: 'FMAS Annual Art Fair Poster',
        role: 'Chief of Illustration',
        year: '2024',
        tags: ['Screenprint Aesthetic', 'Art Fair'],
        description: 'A vibrant limited-run print poster celebrating student illustrators, printed in duotone pink and lemon butter inks.'
      },
      {
        name: 'The Southern Pulse Campus Broadsheets',
        role: 'Student Cartoonist',
        year: '2018 - 2020',
        tags: ['Editorial', 'Satirical Illustration'],
        description: 'Hand-drawn front-page editorial cartoons commenting on community events and educational reforms.'
      }
    ]
  },
  photo: {
    title: '4. PHOTOGRAPHY',
    icon: '📷',
    desc: 'Warm documentary stills, production set photography, and charming portrait series with rich natural grain.',
    projects: [
      {
        name: 'Bihag ng Dialysis — On-Set Production Stills',
        role: 'Director / Still Photographer',
        year: '2025',
        tags: ['Documentary', 'Lightroom', 'Set Life'],
        description: 'Behind-the-scenes archival photography capturing emotional interviews, clinical environments, and raw heartfelt moments.'
      },
      {
        name: 'Batangas Cultural Heritage Series',
        role: 'Documentary Photographer',
        year: '2023',
        tags: ['Street Life', 'Portraits', 'Warm Grade'],
        description: 'A visual archive celebrating local Batangueño artisans, ancestral home details, and seaside fishing communities.'
      },
      {
        name: 'Summit Books Character & Book Shoots',
        role: 'Art Intern',
        year: '2024',
        tags: ['Editorial', 'Product Mockups'],
        description: 'Creative flat lays and styled book aesthetic photography for young adult and illustrated novel launches.'
      }
    ]
  }
};

// Modal helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }
}

// Show Showcase Content in Modal
function openShowcase(categoryKey) {
  const data = portfolioData[categoryKey];
  if (!data) return;

  const titleEl = document.getElementById('showcase-title');
  const iconEl = document.getElementById('showcase-icon');
  const descEl = document.getElementById('showcase-desc');
  const listEl = document.getElementById('showcase-list');

  if (titleEl) titleEl.textContent = data.title;
  if (iconEl) iconEl.textContent = data.icon;
  if (descEl) descEl.textContent = data.desc;

  if (listEl) {
    listEl.innerHTML = data.projects.map((p) => `
      <div class="bg-black/30 p-3.5 rounded-2xl border border-white/10 hover:border-brand-pink/50 transition">
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <h4 class="font-chunky text-white text-sm tracking-wide">${p.name}</h4>
          <span class="text-[10px] bg-brand-wine text-brand-butter px-2 py-0.5 rounded-full font-bold flex-shrink-0">${p.year}</span>
        </div>
        <p class="text-[11px] text-brand-softPink font-bold mb-1.5">${p.role}</p>
        <p class="text-xs text-brand-cream/80 leading-relaxed mb-2.5">${p.description}</p>
        <div class="flex flex-wrap gap-1">
          ${p.tags.map(tag => `<span class="text-[9.5px] bg-white/10 text-white/90 px-2 py-0.5 rounded-md font-medium">#${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  openModal('modal-showcase');
}

// Lightbox for Polaroids
function openLightbox(imageSrc, caption) {
  const lbImg = document.getElementById('lightbox-image');
  const lbCap = document.getElementById('lightbox-caption');
  if (lbImg) lbImg.src = imageSrc;
  if (lbCap) lbCap.textContent = caption || 'Portfolio Asset';
  openModal('modal-lightbox');
}

// Copy to Clipboard with Toast
function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Email copied to clipboard: ${email} 📋✨`);
  }).catch(() => {
    // Fallback
    window.location.href = `mailto:${email}`;
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-container');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('toast-enter');

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('hidden');
  }, 3000);
}

// Viewport mode toggle (Mobile Frame vs Expanded Desktop View)
function toggleViewMode() {
  const container = document.getElementById('main-portfolio-container');
  const toggleBtnText = document.getElementById('toggle-view-btn-text');
  if (!container) return;

  if (container.classList.contains('max-w-[430px]')) {
    container.classList.remove('max-w-[430px]');
    container.classList.add('max-w-4xl');
    if (toggleBtnText) toggleBtnText.textContent = 'Switch to 📱 Mobile Frame';
    showToast('Switched to Wide Desktop Layout 💻✨');
  } else {
    container.classList.remove('max-w-4xl');
    container.classList.add('max-w-[430px]');
    if (toggleBtnText) toggleBtnText.textContent = 'Switch to 💻 Wide View';
    showToast('Switched to Original Stitch Mobile Frame 📱✨');
  }
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal('modal-showcase');
    closeModal('modal-contact');
    closeModal('modal-lightbox');
  }
});

