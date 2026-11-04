# Playful Illustrative Portfolio — Koziah Mae Perez 🌸

Implementation of the **Playful Illustrative Portfolio** screen from Stitch MCP project:
* **Project Name:** `Cinematic Video Editor Portfolio`
* **Project ID:** `12788661968593864349`
* **Screen Name:** `Playful Illustrative Portfolio`
* **Screen ID:** `6a3c682a82ee434cac463d1c5f6ce23d`

---

## 🎨 Design Character & Features

This project faithfully preserves the handcrafted, whimsical aesthetic from Google Stitch without downgrading into generic design patterns:

1. **Color Palette & Atmosphere:**
   * Grounded in deep berry/plum tones (`#2b0016`, `#4a0026`, `#610a38`) with sunny butter yellows (`#ffdf6d`), bubblegum pinks (`#ff4f8b`), and cream whites (`#fffdfa`).
   * Subtle ambient starry background pattern and radial gradients.

2. **Handcrafted Vector Elements:**
   * Whimsical cottage illustration with forest pine trees, warm amber walls, shutter windows, and green grass mound.
   * Playful letter tilts with an animated spinning floral doodle for the letter **O** in **FOLIO**.
   * Multi-tiered undulating hill landscape with winding gravel road and dashed center lines in the footer.

3. **Interactive & Responsive Enhancements:**
   * **Table of Contents Showcases:** Clicking any chapter pill (Brand Identity, Social Media, Posters, Photography) opens an interactive modal with project details and case study briefs.
   * **Lightbox Inspection:** Click on either the Polaroid portrait or the *Art Girl* illustration to view them in high-resolution lightbox mode.
   * **View Mode Switcher:** Toggle between the native **📱 Mobile Frame (430px)** and a **💻 Wide Layout** on desktop screens.
   * **One-Click Email Copy:** Click the email address or button to copy with instant toast confirmation.
   * **Reference Screenshot:** Includes the original high-resolution Stitch screenshot (`assets/images/stitch-screenshot.png`) for design fidelity review.

---

## 📂 Project Structure

```text
Portofolio/
├── index.html                       # Main portfolio landing page
├── assets/
│   ├── css/
│   │   └── style.css                # Custom keyframes, tilts, fonts, and scrollbars
│   ├── js/
│   │   └── main.js                  # Modals, lightbox, toast notifications, view switcher
│   └── images/
│       ├── koziah-portrait.jpg      # Profile portrait photo
│       ├── koziah-artwork.jpg       # "Art Girl" character illustration
│       └── stitch-screenshot.png    # Original Stitch reference screenshot
└── README.md
```

---

## 🚀 How to Run Locally

You can open `index.html` directly in any modern browser, or run a local HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js npx
npx serve .
```

Then visit `http://localhost:8000` in your browser.

