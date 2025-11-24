# 🍽️ StuffedPlate — 3D Food Plate Builder (PWA)

StuffedPlate is an interactive **3D food plate builder** built using **React, TypeScript, Vite, and React Three Fiber (R3F)**.  
Users can search foods, place 3D objects on a plate, view nutrition facts, and capture & share their creations — all inside a fast, lightweight PWA.

---

## 🚀 Tech Stack

### **Frontend**
- **React + TypeScript**
- **Vite** (super‑fast dev + optimized builds)
- **TailwindCSS** for UI styling
- **React Three Fiber (R3F)** for rendering 3D components
- **Three.js** GLTF loading + scene management
- **Zustand** for lightweight global state management
- **html2canvas** for image capturing
- **Vite Plugin PWA** (offline support + installable app)

### **3D**
- GLTF/GLB models imported dynamically
- Lazy-loaded models (performance optimized)
- Custom fallback for missing models (3D Text replacement)

### **APIs**
- **FatSecret API** (via custom Cloudflare Worker proxy)
  - Search foods / get nutrition details
- Custom nutrition calculator (macros, child-nutrients, daily value %, etc.)

---

## 📦 Features

### ✔️ 3D Plate Builder
- Choose meals → each meal has a 3D model
- Models auto‑load lazily for performance
- Missing models replaced with dynamic 3D text with random colors

### ✔️ Nutrition System
- Total nutrition based on selected meals
- Individual nutrition breakdown
- Daily Value (%) calculator (editable caloric base)
- Auto-summarized nutrient hierarchy  
  (e.g., Total Fat = sum of saturated + trans + mono + poly)

### ✔️ Screenshot & Sharing
- Capture entire 3D scene (with transparent plate)
- Show captured preview overlay
- Share using Web Share API (mobile)
- Save to device on all platforms

### ✔️ Progressive Web App (PWA)
- Installable on iOS & Android
- Offline caching
- Runtime caching for 3D models
- Custom service worker

---

## 🛠️ Development Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

To preview:

```bash
npm run preview
```

---

## 📅 Roadmap

### 🔹 **Phase 1 — Completed**
- 3D model placement
- Basic meal selection
- Nutrition detail integration
- Screenshot overlay system
- PWA support

### 🔹 **Phase 2 — In Progress**
- Nutrition details UI redesign
- Recipes templates
- Model performance optimization  
  (model compression, draco support, smaller textures)
- Food search autocomplete
- Better capture quality

### 🔹 **Phase 3 — Future Plans**
- Drag & drop foods on plate
- 3D animations (steam, seasoning, sizzling effects)
- Custom plate, utensils, background presets
- User accounts + saved plates
- Social sharing gallery
- AI image → food detection → autofill plate
- AI meal naming suggestions

---

## 👤 Credits

All 3D models are licensed under Creative Commons (CC BY/CC BY‑SA).  
Full credits listed inside the application.

---

## 📄 License

This project is private and not open-source (for now).

---

If you need help adding badges, images, or formatting improvements, tell me!