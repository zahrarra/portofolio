// ===== Tahun dinamis di footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Toggle menu mobile =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Tutup menu saat salah satu link diklik (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== Navbar: sorot link section yang sedang tampil =====
const sections = document.querySelectorAll("section[id]");
const navAnchors = navLinks.querySelectorAll("a");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 120;
  let current = sections[0]?.id;

  sections.forEach((sec) => {
    if (scrollPos >= sec.offsetTop) current = sec.id;
  });

  navAnchors.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});

// ===== Animasi reveal saat section masuk viewport =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ===== Lightbox: klik gambar karya untuk memperbesar =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCap = document.getElementById("lightboxCap");

document.querySelectorAll(".work-gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCap.textContent =
      img.closest("figure")?.querySelector("figcaption")?.textContent || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("lightboxClose").addEventListener("click", (e) => {
  e.stopPropagation();
  closeLightbox();
});
lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
