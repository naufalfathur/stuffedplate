# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

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
- Gamified streaks (daily healthy plate)

---

## 👤 Credits

All 3D models are licensed under Creative Commons (CC BY/CC BY‑SA).  
Full credits listed inside the application.

---

## 📄 License

This project is private and not open-source (for now).

---

If you need help adding badges, images, or formatting improvements, tell me!