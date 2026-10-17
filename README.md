# APPALACHIA HAZE ✦ Modern Bluegrass Website & Mobile App

A contemporary, high-contrast band website for **Appalachia Haze**, an authentic bluegrass stringband from Asheville, North Carolina. Styled after the modern, architectural aesthetic of [Shadowgrass](https://shadowgrass.com/) (Baseline editorial grid, bold Swiss sans-serif typography, high-contrast borders, and high-impact mountain photography).

---

## 📱 Dual-Mode Display: Desktop Website & Mobile App

The site is built as a responsive web experience and an installable Progressive Web App (PWA):

1. **On Desktop / Laptop Browsers:**
   - Wide architectural grid layout with 2px borders, sticky header with live navigation ticks, expanded tour table, split video showcase, and multi-column footer.

2. **On Mobile Phones & Tablets (`<= 768px`):**
   - Single-column touch-optimized layout with 44px+ tap targets.
   - **Native Mobile Bottom Navigation Bar**: Fixed at the bottom (`Home`, `Tour`, `Band`, `Videos`, `Book`) with active scroll tracking and iPhone safe-area padding (`env(safe-area-inset-bottom)`).
   - Collapsible slide-down menu drawer.

3. **When Installed as an App (PWA Standalone Mode):**
   - Launches in full-screen standalone mode without browser chrome or URL bar.
   - Offline caching via service worker (`sw.js`).
   - Custom home screen app icon.

---

## ⚡ Shadowgrass-Inspired Design System

1. **Architectural Grid System**:
   - Crisp 2px solid black gridline borders separating headers, tables, and content modules.
   - Color blocked sections:
     - **Bone Cream / Oatmeal** (`#f4f3ea`): Warm organic foundation.
     - **Pitch Black** (`#111111`): High-contrast typography and structural borders.
     - **Blue Ridge Forest Pine** (`#234338`): Deep mountain green accents.
     - **Modern Chartreuse / Acid Lime** (`#c6f91f`): High-energy interactive highlights and hover states.
     - **Crisp White** (`#ffffff`): Clean cards and form tiles.

2. **Typography (Hippie 60s/70s Psychedelic Jam Band Aesthetic)**:
   - **Shrikhand & Spicy Rice**: Voluptuous, swooping psychedelic counter-culture display fonts for the band name, section titles, venue names, picker credits, and motto.
   - **Caprasimo**: Chunky 1970s Cooper Black festival typeface.
   - **Inter**: Crisp, modern grotesque sans-serif for body copy, descriptions, and inquiry inputs.

3. **Key Sections**:
   - **Hero Panorama & Living Smoke Atmosphere**: Luminous Blue Ridge Mountains sunrise vista with drifting, living mountain smoke/mist clouds, pulsing haze aura, and psychedelic 3D title.
   - **Top Booking Callout**: High-impact prompt bar: *"WANT APPALACHIA HAZE TO PLAY AT YOUR VENUE OR FESTIVAL?"* with a direct booking inquiry button.
   - **Upcoming Shows (Around Town)**: Architectural high-contrast 3-column grid table with dates, venue names, and locations.
   - **The Band**: Dedicated biographical split layout featuring the official porch band portrait, the motto (*“Bluegrass music for all occasions.”*), and Asheville origin story.
   - **The Pickers**: Clean 5-column left-to-right lineup with names and roles:
     - **Sarah Swilley** — Lead & Harmony Vocals | `FLATPICKING GUITAR`
     - **Scoot Woody** — Harmony Vocals | `5-STRING BANJO`
     - **Bryan Clendenin** — Lead & Harmony Vocals | `MANDOLIN CHOP`
     - **Sam Gottlieb** — Lead & Harmony Vocals | `FLATPICKING GUITAR`
     - **Mitchell Harbin** — Lead & Harmony Vocals | `UPRIGHT BASS`
   - **Live Sessions (Shadowgrass Media Split Archive)**: Interactive media stage featuring a master video frame on the left and a 4-reel session playlist switcher on the right.
   - **Stay In Touch & Booking**: High-contrast split section with band contact info (including Facebook, `appalachiahaze@gmail.com`, `@appalachia_haze`, and `@AppalachiaHaze`) and clean inquiry form.
   - **Footer**: 3-column architectural grid with navigation, direct channels, and mountain haze badge.

---

## 🚀 How to View Locally

Start the local server:
```bash
python3 -m http.server 8085 --directory appalachia-haze-website
```
Open `http://localhost:8085` in your web browser. 

*Tip: Press `F12` and click the mobile device icon (or press `Ctrl+Shift+M`) to test the native mobile app layout with the bottom navigation bar.*

---

## 🛠️ Customization

- **YouTube Videos**: In `index.html`, replace the `src` attribute in the `iframe` (`embed/YOUR_VIDEO_ID`) or update the `data-video-src` on the `.video-card` elements.
- **Band Photos**: Replace the Unsplash URLs in `index.html` with your high-res photos placed in `assets/`.
- **Tour Dates**: Edit the `<div class="tour-row">` items in the Tour Dates section of `index.html`.

