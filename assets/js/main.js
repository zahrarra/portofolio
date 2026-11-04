/**
 * Playful Illustrative Portfolio - Interactive Logic
 * Faithfully preserving the whimsical Stitch visual style & adding rich interactivity.
 */

// Portfolio showcase projects data for Table of Contents
const portfolioData = {
  video: {
    title: '1. VIDEO EDITING 🎬',
    icon: '🎬',
    desc: 'Edit video untuk media sosial & promosi acara — dipotong, diberi ritme, dan disesuaikan dengan gaya konten menggunakan CapCut.',
    projects: [
      {
        name: 'Konten Video Promosi IFEST 2026',
        role: 'Tim Konten (Editor Video)',
        year: '2026',
        tags: ['CapCut', 'Instagram', 'Promosi Acara'],
        description: 'Video promosi untuk akun @ifest_untad, termasuk konten "POV: Ketua Pelaksana" — diedit dengan ritme cepat khas konten media sosial.'
      },
      {
        name: 'Konten Video Kegiatan Organisasi',
        role: 'Editor Video',
        year: '2025',
        tags: ['CapCut', 'Dokumentasi', 'Media Sosial'],
        description: 'Video dokumentasi dan publikasi berbagai kegiatan kampus, diedit menggunakan CapCut untuk kebutuhan media sosial organisasi.'
      }
    ]
  },
  social: {
    title: '2. MEDIA SOSIAL 📱',
    icon: '📱',
    desc: 'Konten carousel, promosi produk, dan live report untuk kebutuhan publikasi organisasi di media sosial.',
    projects: [
      {
        name: 'Carousel Edukasi Cloud Computing',
        role: 'Desainer Konten',
        year: '2025',
        tags: ['Instagram', 'Carousel', 'Edukasi'],
        description: 'Konten edukasi mengenai Cloud Computing untuk media sosial HMTI — disusun dalam format carousel Instagram agar materi tersampaikan ringkas dan mudah dipahami.'
      },
      {
        name: 'Konten Promosi Play Box',
        role: 'Desainer Konten',
        year: '2025',
        tags: ['Promosi Produk', 'Media Sosial'],
        description: 'Pembuatan konten media sosial untuk mempromosikan Play Box sebagai permainan portable — visual menarik untuk meningkatkan daya tarik produk.'
      },
      {
        name: 'Desain Live Report Bazar',
        role: 'Desainer',
        year: '2025',
        tags: ['Live Report', 'Publikasi Acara'],
        description: 'Desain live report untuk publikasi kegiatan bazar di media sosial dengan konsistensi visual dan keterbacaan informasi yang baik.'
      }
    ]
  },
  design: {
    title: '3. DESAIN 🎨',
    icon: '🎨',
    desc: 'Poster acara, desain UI/UX aplikasi, dan desain web — dibuat dengan Canva dan Figma.',
    projects: [
      {
        name: 'Poster Calling for Tenants — IFEST 2026',
        role: 'Desainer',
        year: '2026',
        tags: ['Poster', 'Event', 'Canva'],
        description: 'Poster "Calling for Tenants" untuk kebutuhan promosi IFEST 2026.'
      },
      {
        name: 'VolunteerOne — UI/UX Aplikasi Mobile',
        role: 'UI/UX Designer',
        year: '2025',
        tags: ['Figma', 'UI/UX', 'Mobile App'],
        description: 'Desain aplikasi mobile yang menghubungkan relawan dengan organisasi sosial — merancang konsep, alur pengguna (user flow), dan antarmuka menggunakan Figma.'
      },
      {
        name: 'Rumah Sedekah — Desain Website Donasi',
        role: 'Web Designer',
        year: '2025',
        tags: ['Web Design', 'Donasi'],
        description: 'Desain website donasi untuk memudahkan masyarakat menemukan program bantuan, melihat informasi donasi, dan menyalurkan bantuan secara online.'
      }
    ]
  },
  doc: {
    title: '4. DOKUMENTASI 📷',
    icon: '📷',
    desc: 'Dokumentasi foto & video kegiatan kampus dan organisasi untuk kebutuhan publikasi.',
    projects: [
      {
        name: 'Dokumentasi IFEST 2025 & 2026',
        role: 'Tim Dokumentasi & Konten',
        year: '2025 - 2026',
        tags: ['Foto', 'Video', 'Event'],
        description: 'Dokumentasi foto dan video rangkaian kegiatan IFEST untuk kebutuhan publikasi media sosial.'
      },
      {
        name: 'Dokumentasi Dies Natalis HMTI 2025',
        role: 'Tim Dokumentasi & Konten',
        year: '2025',
        tags: ['Foto', 'Video', 'Event'],
        description: 'Dokumentasi foto dan video kegiatan Dies Natalis HMTI sebagai arsip dan bahan publikasi.'
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

