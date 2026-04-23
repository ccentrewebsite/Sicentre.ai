---
version: "0.1"
name: Sicentre Design System

colors:
  primary:
    violet: "#7C3AED"
    orange: "#EA580C"
  accent:
    violetLight: "#A78BFA"
    orangeLight: "#FB923C"
  background:
    base: "#000000"
    surface: "#0D0B18"
    card: "rgba(255,255,255,0.03)"
    glass: "rgba(255,255,255,0.055)"
  text:
    primary: "#FFFFFF"
    muted: "rgba(255,255,255,0.55)"
    subtle: "rgba(255,255,255,0.30)"
    label: "rgba(255,255,255,0.25)"
  gradient:
    primary: "linear-gradient(135deg, #7C3AED, #EA580C)"
    hero: "linear-gradient(135deg, #000000, #0a0015, #FF5500, #8B00FF)"
    global: "linear-gradient(135deg, #000000, #050008, #CC3300, #7700BB)"

typography:
  families:
    display: "'AUTOMATA-DISPLAY', sans-serif"
    heading: "'Clash Display', sans-serif"
    body: "'Plus Jakarta Sans', sans-serif"
  scale:
    hero: "clamp(2.2rem, 6vw, 6rem)"
    h1: "clamp(2rem, 5vw, 4rem)"
    h2: "clamp(1.8rem, 4vw, 3rem)"
    h3: "clamp(1.3rem, 2.2vw, 1.65rem)"
    body: "1rem"
    small: "0.875rem"
    label: "0.6875rem"
  weights:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
  tracking:
    tight: "-0.02em"
    normal: "0"
    wide: "0.12em"
    widest: "0.2em"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "64px"
  section: "96px"

rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "24px"
  full: "9999px"

components:
  button:
    default:
      background: "rgba(255,255,255,0.055)"
      border: "1px solid rgba(255,255,255,0.11)"
      backdropFilter: "blur(28px)"
      borderRadius: "{rounded.full}"
      color: "{colors.text.primary}"
      fontFamily: "{typography.families.body}"
      fontWeight: "{typography.weights.semibold}"
    cta:
      background: "{colors.gradient.primary}"
      borderRadius: "{rounded.full}"
      color: "{colors.text.primary}"
      fontWeight: "{typography.weights.bold}"
  card:
    default:
      background: "{colors.background.card}"
      border: "1px solid rgba(124,58,237,0.25)"
      backdropFilter: "blur(20px)"
      borderRadius: "{rounded.xl}"
    warm:
      border: "1px solid rgba(234,88,12,0.25)"
  navbar:
    background: "{colors.background.glass}"
    backdropFilter: "blur(28px)"
    border: "1px solid rgba(255,255,255,0.11)"
    borderRadius: "{rounded.full}"
    height: "62px"
---

# Sicentre Design System

## Overview

Sicentre est une agence digitale 360° IA pour l'Amérique Latine. Le design est **dark-only**, futuriste et glassmorphism. Le site tourne sur Next.js 14 App Router, Tailwind CSS, TypeScript.

**Principes :**
- Dark mode exclusif — aucune variante light
- Glassmorphism systématique sur les surfaces interactives
- Gradient signature violet → orange omniprésent dans les CTAs
- Typographie display agressive (AUTOMATA-DISPLAY) pour les titres
- Animations subtiles, jamais excessives

---

## Colors

### Primaires
| Token | Valeur | Usage |
|---|---|---|
| `colors.primary.violet` | `#7C3AED` | Bordures, accents, liens |
| `colors.primary.orange` | `#EA580C` | CTAs chauds, highlights |
| `colors.accent.violetLight` | `#A78BFA` | Textes secondaires violet |
| `colors.accent.orangeLight` | `#FB923C` | Glows, dots décoratifs |

### Gradient signature
```
linear-gradient(135deg, #7C3AED, #EA580C)
```
Utilisé sur : boutons CTA principaux, badges, éléments premium.

### Backgrounds
- **Base** : `#000000` — fond absolu
- **Surface** : `#0D0B18` — sections, pages intérieures
- **Glass** : `rgba(255,255,255,0.055)` + `backdrop-filter: blur(28px)` — navbar, modals
- **Card** : `rgba(255,255,255,0.03)` + `backdrop-filter: blur(20px)` — cartes de contenu

### Texte
- **Primary** : `#FFFFFF`
- **Muted** : `rgba(255,255,255,0.55)` — descriptions, paragraphes
- **Subtle** : `rgba(255,255,255,0.30)` — placeholders, hints
- **Label** : `rgba(255,255,255,0.25)` — labels uppercase, catégories

---

## Typography

### Familles
- **AUTOMATA-DISPLAY** — titres hero, stats, noms de sections (`font-family: 'AUTOMATA-DISPLAY'`)  
  Fichier : `/public/fonts/AUTOMATA-DISPLAY.otf`
- **Clash Display** — sous-titres de sections, headings secondaires  
  Source : Fontshare CDN
- **Plus Jakarta Sans** — tout le corps de texte, descriptions, boutons, labels  
  Source : Google Fonts (400, 500, 600, 700)

### Règle d'usage
- AUTOMATA-DISPLAY = **titres uniquement** (h1, h2, stats display)
- Plus Jakarta Sans = **tout le reste** (body, buttons, nav, labels)
- Ne jamais mélanger les deux dans la même ligne

### Échelle mobile
- Titre hero minimum : `2.2rem` sur 375px
- Titres de section maximum : `2.5rem` sur mobile
- Corps de texte minimum : `14px`

---

## Layout

### Breakpoints
| Nom | Valeur |
|---|---|
| Mobile | 375px |
| Tablet | 768px (`md:`) |
| Desktop | 1280px (`lg:`) |

### Conteneurs
- Max-width principal : `max-w-6xl` (1152px)
- Padding horizontal : `px-4 md:px-10`
- Padding vertical sections : `py-24`

### Grilles
- Desktop : `grid-cols-3` ou `grid-cols-2`
- Mobile : toujours `grid-cols-1` (sauf justification explicite)

---

## Elevation & Depth

### Niveaux de profondeur
1. **Background** — MeshGradient WebGL animé (chargé client-side uniquement, `ssr: false`)
2. **Surface** — sections avec `planet-section`, radial-gradient accents
3. **Cards** — `backdrop-filter: blur(20px)`, border subtile
4. **Overlay** — navbar pill `blur(28px)`, modals, dropdowns
5. **Top** — tooltips, menus mobiles fullscreen

### Ombres
- Cards au repos : `0 4px 24px rgba(0,0,0,0.3)`
- Cards hover : `0 16px 60px rgba(0,0,0,0.5)`
- Glow CTA : `0 0 30px rgba(124,58,237,0.45)`
- Glow orange : `0 0 28px rgba(234,88,12,0.5)`

---

## Shapes

### Border radius
| Token | Valeur | Usage |
|---|---|---|
| `rounded.sm` | `8px` | Petits éléments internes |
| `rounded.md` | `12px` | Badges, tags |
| `rounded.lg` | `20px` | Dropdowns, modals |
| `rounded.xl` | `24px` | Cards principales |
| `rounded.full` | `9999px` | Boutons pill, navbar |

---

## Components

### LiquidButton (bouton principal)
```tsx
// Glassmorphism pill avec mouse-follow glow
<LiquidButton size="xxl">Hablemos</LiquidButton>
```
- Fond : `rgba(255,255,255,0.055)` + `blur(28px)`
- Border : `1px solid rgba(255,255,255,0.11)`
- Border-radius : `9999px`
- Glow au survol : radial-gradient suivant la souris
- Tailles : `sm` `md` `lg` `xl` `xxl`

### CTA Button (gradient)
```tsx
<button style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}>
  Hablemos →
</button>
```
- Utilisé pour les actions principales de conversion
- Toujours pill (`border-radius: 9999px`)
- Toujours `font-bold`

### Navbar
- Pill glassmorphism centré, `max-w-2xl`
- Cache au scroll vers le bas, réapparaît au scroll vers le haut
- Mobile : overlay fullscreen avec cartes de services + liens + CTA gradient

### Glass Card
```css
background: rgba(255,255,255,0.03);
backdrop-filter: blur(20px);
border: 1px solid rgba(124,58,237,0.25); /* violet */
border-radius: 24px;
```
Variante warm (services voz/comparaison) : `border-color: rgba(234,88,12,0.25)`

### Stat Display
```tsx
// Outlined glow — desktop uniquement
color: transparent
-webkit-text-stroke: 2px {color}
text-shadow: 0 0 36px {color}, 0 0 70px {color}

// Solid fill — mobile
color: {color}
text-shadow: 0 0 24px {color}
```

---

## Do's and Don'ts

### ✅ Do
- Toujours charger MeshGradient avec `dynamic` + `ssr: false`
- Utiliser `clamp()` pour les font-sizes des titres
- Padding horizontal minimum `px-4` sur mobile
- Grilles en `grid-cols-1` sur mobile par défaut
- Boutons CTA pleine largeur (`w-full`) sur mobile
- Décorations SVG avec `hidden md:block` si non essentielles sur mobile
- Animations CSS légères (transform, opacity) uniquement

### ❌ Don't
- Ne jamais utiliser de fond clair ou blanc
- Ne jamais utiliser une police serif
- Ne jamais mettre AUTOMATA-DISPLAY sur le body text
- Ne jamais créer d'overflow horizontal accidentel
- Ne jamais utiliser `@react-three/fiber` (incompatible React 19)
- Ne jamais afficher MeshGradient côté serveur (crash SSR)
- Ne jamais mettre font-size < 14px sur mobile pour du contenu
