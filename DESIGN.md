---
version: alpha
name: Sicentre
description: Agencia digital 360° con IA para América Latina. Dark-only, futurista, glassmorphism.

colors:
  primary: "#7C3AED"
  secondary: "#EA580C"
  primary-light: "#A78BFA"
  secondary-light: "#FB923C"
  surface: "#0D0B18"
  on-surface: "#FFFFFF"
  neutral: "#000000"
  muted: "#8A8A9A"

typography:
  headline-display:
    fontFamily: AUTOMATA-DISPLAY
    fontSize: 96px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: AUTOMATA-DISPLAY
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Clash Display
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
  headline-sm:
    fontFamily: Clash Display
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.12em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.18em

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 96px
  gutter: 24px
  margin: 40px

rounded:
  sm: 8px
  md: 12px
  lg: 20px
  xl: 24px
  full: 9999px

components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #7C3AED, #EA580C)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 16px 32px
    typography: "{typography.label-lg}"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #8B4CF7, #F56A1A)"
  button-glass:
    backgroundColor: "rgba(255,255,255,0.055)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-glass-hover:
    backgroundColor: "rgba(255,255,255,0.09)"
  card-default:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 28px
  card-warm:
    backgroundColor: "rgba(234,88,12,0.18)"
    rounded: "{rounded.xl}"
    padding: 28px
  navbar:
    backgroundColor: "rgba(255,255,255,0.055)"
    rounded: "{rounded.full}"
    height: 62px
    padding: 0 24px
---

# Sicentre Design System

## Overview

Sicentre est une agence digitale 360° avec IA pour les entreprises d'Amérique Latine. Le produit est un site web marketing en Next.js 14 App Router + Tailwind CSS + TypeScript, déployé sur Vercel.

Le design est **dark-only, futuriste et glassmorphism**. L'identité visuelle repose sur une tension entre violet électrique (technologie, IA, innovation) et orange brûlant (énergie, urgence, conversion). Chaque surface interactive est un verre fumé. Chaque CTA est un gradient violet-orange.

La personnalité de la marque est **confiante, directe et provocatrice** — le design doit transmettre que Sicentre est en avance sur le marché. Aucune concession au design générique ou aux templates.

Trois polices coexistent avec des rôles stricts : AUTOMATA-DISPLAY pour les titres impact, Clash Display pour les sections, Plus Jakarta Sans pour tout le reste.

## Colors

La palette repose sur deux couleurs primaires en tension, un fond noir absolu et des surfaces en verre fumé.

- **Primary (#7C3AED) :** Violet électrique — technologie, IA, innovation. Utilisé pour les bordures de cards, accents, liens et la moitié gauche du gradient signature.
- **Secondary (#EA580C) :** Orange brûlant — énergie, conversion, urgence. Utilisé pour les CTAs chauds, highlights et la moitié droite du gradient signature.
- **Primary Light (#A78BFA) :** Violet clair pour les textes secondaires et icônes sur fond sombre.
- **Secondary Light (#FB923C) :** Orange clair pour les glows, dots décoratifs et détails d'illustration.
- **Surface (#0D0B18) :** Fond des sections et pages intérieures — noir bleuté très profond.
- **Neutral (#000000) :** Fond absolu du site.
- **On-surface (#FFFFFF) :** Texte principal sur tous les fonds sombres.

**Gradient signature :** `linear-gradient(135deg, #7C3AED, #EA580C)` — utilisé exclusivement pour les CTAs principaux, badges premium et éléments de conversion.

**Glass surfaces :** `rgba(255,255,255,0.055)` avec `backdrop-filter: blur(28px)` pour la navbar. `rgba(255,255,255,0.03)` avec `backdrop-filter: blur(20px)` pour les cards.

## Typography

Trois familles avec des rôles absolument distincts — ne jamais les mélanger au sein d'un même élément.

- **AUTOMATA-DISPLAY :** Police custom futuriste géométrique. Réservée aux titres hero, stats display (24/7, 100%, ∞) et noms de sections principales. Fichier local : `/public/fonts/AUTOMATA-DISPLAY.otf`.
- **Clash Display :** Police géométrique moderne via Fontshare. Pour les sous-titres de sections et les headings secondaires (h2, h3 de section).
- **Plus Jakarta Sans :** Police sans-serif contemporaine via Google Fonts (400, 500, 600, 700). Pour absolument tout le reste : descriptions, paragraphes, boutons, labels, nav, formulaires.

Les labels uppercase utilisent `letter-spacing: 0.18em` et `font-size: 11px` pour créer une hiérarchie de catégorie discrète.

Sur mobile (375px), les titres hero ne dépassent pas `2.2rem` et les titres de section `2.5rem`. Font-size minimum de contenu : `14px`.

## Layout

Le layout suit un modèle **Fluid + Fixed-Max-Width**. Sur mobile, tout passe en colonne unique. Sur desktop, les grilles utilisent 2 ou 3 colonnes selon le contenu.

La section est l'unité de composition : chaque section a `padding-top: 96px` et `padding-bottom: 96px`. Le contenu est centré dans un conteneur `max-width: 1152px` (Tailwind `max-w-6xl`) avec `padding-horizontal: 16px` sur mobile et `40px` sur desktop.

L'échelle de spacing suit une base de 8px. Les grilles utilisent `gap: 24px` (6 unités).

**Breakpoints :**
- Mobile : 375px — `grid-cols-1`, titres réduits, boutons pleine largeur
- Tablet : 768px (`md:`) — transition vers layouts desktop
- Desktop : 1280px (`lg:`) — grilles 2-3 colonnes, décors SVG visibles

## Elevation & Depth

La profondeur est exprimée par le **glassmorphism en couches**, pas par des ombres portées classiques.

1. **Background (z-0)** : MeshGradient WebGL animé (chargé client-side uniquement via `dynamic` + `ssr: false`). Ne jamais rendre côté serveur.
2. **Sections (z-1)** : Fonds `#0D0B18` avec accents radial-gradient en violet ou orange selon la thématique de la section.
3. **Cards (z-2)** : `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.03)`, border subtile couleur du service.
4. **Navbar (z-100)** : Pill glassmorphism `blur(28px)`, flotte au-dessus de tout le contenu.
5. **Overlays (z-90)** : Menu mobile fullscreen, dropdowns.

Ombres :
- Cards repos : `0 4px 24px rgba(0,0,0,0.3)`
- Cards hover : `0 16px 60px rgba(0,0,0,0.5)`
- Glow violet : `0 0 30px rgba(124,58,237,0.45)`
- Glow orange : `0 0 28px rgba(234,88,12,0.5)`

## Shapes

Le langage de forme est **pill pour l'interactif, arrondi large pour les cards**.

Tous les boutons sont des pills parfaits (`border-radius: 9999px`) — jamais de bouton rectangulaire ou légèrement arrondi. La navbar est également un pill. Les cards utilisent `24px` de radius pour une sensation premium mais structurée. Les dropdowns et modals utilisent `20px`.

## Components

### Boutons

Deux variantes principales :

**CTA Gradient (action principale)** : `background: linear-gradient(135deg, #7C3AED, #EA580C)`, pill, `font-bold`. Utilisé pour les conversions critiques (Hablemos, Demo, Contacto).

**Glass Button (action secondaire)** : `background: rgba(255,255,255,0.055)`, `backdrop-filter: blur(28px)`, border `rgba(255,255,255,0.11)`, pill. Avec effet mouse-follow glow au survol. Utilisé pour les navigations internes (Ver servicios).

Sur mobile, les boutons côte à côte passent en colonne (`flex-col`) et deviennent pleine largeur (`w-full`).

### Navbar

Pill glassmorphism centré, `max-w-2xl`, hauteur `62px`. Se cache au scroll vers le bas, réapparaît au scroll vers le haut. Desktop : liens + dropdown services. Mobile : overlay fullscreen avec cards de services en grille 3 colonnes + liens grands + CTA gradient.

### Cards de service

`border-radius: 24px`, `backdrop-filter: blur(20px)`. Couleur de border selon le service : violet pour Web, orange pour Voz IA, bleu pour Motion. Hover : `translateY(-8px)` + glow coloré.

### Stats display

Desktop : texte transparent avec `-webkit-text-stroke` + glow (effet outline néon). Mobile : texte couleur pleine avec glow (effet solid). Ne jamais utiliser l'effet outline sur mobile — illisible sur petit écran.

## Do's and Don'ts

- Do utiliser dark mode exclusivement — aucune surface blanche ou claire
- Do charger MeshGradient avec `dynamic` + `ssr: false` obligatoirement
- Do utiliser `clamp()` pour toutes les font-sizes de titres
- Do mettre les décorations SVG en `hidden md:block` si non essentielles sur mobile
- Do utiliser le gradient signature uniquement pour les CTAs de conversion
- Don't utiliser AUTOMATA-DISPLAY sur des textes de description ou labels
- Don't mettre de police serif quelle qu'elle soit
- Don't créer d'overflow horizontal sur mobile
- Don't utiliser `@react-three/fiber` — incompatible React 19
- Don't afficher MeshGradient côté serveur — crash SSR garanti
- Don't descendre sous 14px de font-size pour du contenu sur mobile
- Don't mélanger coins arrondis et coins droits dans la même vue
