---
name: Obsidian Violet
colors:
  surface: '#131125'
  surface-dim: '#131125'
  surface-bright: '#39374d'
  surface-container-lowest: '#0e0c20'
  surface-container-low: '#1b192e'
  surface-container: '#1f1d32'
  surface-container-high: '#2a273d'
  surface-container-highest: '#353248'
  on-surface: '#e4dffc'
  on-surface-variant: '#d4c0d7'
  inverse-surface: '#e4dffc'
  inverse-on-surface: '#302e44'
  outline: '#9d8ba0'
  outline-variant: '#504254'
  surface-tint: '#ebb2ff'
  primary: '#ebb2ff'
  on-primary: '#520072'
  primary-container: '#bc13fe'
  on-primary-container: '#ffffff'
  inverse-primary: '#9800d0'
  secondary: '#cbbeff'
  on-secondary: '#340098'
  secondary-container: '#5d00ff'
  on-secondary-container: '#d2c6ff'
  tertiary: '#c8bfff'
  on-tertiary: '#2f246d'
  tertiary-container: '#776db9'
  on-tertiary-container: '#040023'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f8d8ff'
  primary-fixed-dim: '#ebb2ff'
  on-primary-fixed: '#320047'
  on-primary-fixed-variant: '#74009f'
  secondary-fixed: '#e7deff'
  secondary-fixed-dim: '#cbbeff'
  on-secondary-fixed: '#1e0060'
  on-secondary-fixed-variant: '#4c00d3'
  tertiary-fixed: '#e5deff'
  tertiary-fixed-dim: '#c8bfff'
  on-tertiary-fixed: '#1a0958'
  on-tertiary-fixed-variant: '#463c85'
  background: '#131125'
  on-background: '#e4dffc'
  surface-variant: '#353248'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-max: 1440px
---

## Brand & Style

The design system embodies a "Midnight Purple" aesthetic, evolving from traditional cyber-intelligence visuals into a more sophisticated, high-energy spectrum. The target audience consists of security analysts and tech enthusiasts who require high-performance interfaces that feel advanced and immersive.

The style is **Futuristic Minimalism with Neon Accents**. It utilizes deep indigo surfaces paired with vibrant purple highlights to create a sense of depth and digital urgency. The emotional response is one of focused power, precision, and state-of-the-art protection. The UI maintains high-tech sophistication through subtle glow effects and razor-sharp typography, avoiding unnecessary clutter while emphasizing critical data points.

## Colors

The palette is anchored in a dark, atmospheric environment. 

- **Primary (#bc13fe):** A vibrant neon purple used for primary actions, critical alerts, and active states. It provides the "glow" characteristic of the theme.
- **Secondary (#5d00ff):** A deep electric indigo used for accents, progress indicators, and secondary interactive elements.
- **Tertiary (#2e236c):** A muted, dark violet used for structural elements like borders, dividers, and inactive icons to maintain the purple tint throughout the UI.
- **Neutral (#0d0b1f):** The foundation. This deep "Midnight" tint is used for all primary backgrounds to ensure the purple accents pop without causing visual fatigue.
- **System States:** Success should use a cool violet-white; Warning uses a hot magenta; Error uses a high-saturation red-purple.

## Typography

This design system uses a dual-font strategy to balance modern tech aesthetics with functional readability.

- **Geist** is the primary typeface for headlines and body text. Its clean, technical, and developer-friendly proportions ensure clarity in data-heavy environments.
- **Space Mono** is utilized for labels, metadata, and code snippets. The monospaced nature reinforces the intelligence/hacker aesthetic and provides a rhythmic contrast to the sans-serif body text.

All typography should favor high-contrast ratios. Headlines can occasionally use a subtle outer glow (0-0-8px) in the primary purple color when used as major section headers.

## Layout & Spacing

The layout follows a **Fluid Grid** model based on a 4px baseline shift to ensure mathematical precision across all components.

- **Desktop:** 12-column grid with 24px gutters and 32px margins. Elements should feel grouped into "modules" or "nodes."
- **Tablet:** 8-column grid with 16px gutters and 24px margins.
- **Mobile:** 4-column grid with 12px gutters and 16px margins.

Spacing should be generous between major modules to allow the dark background to act as a visual palette cleanser. Padding within cards and containers should remain tight (16px or 20px) to maintain a dense, "instrument-panel" feel.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layers** and **Purple-tinted Shadows**.

- **Level 0 (Base):** The #0d0b1f background.
- **Level 1 (Cards/Containers):** A slightly lighter tint (#16132b) with a 1px solid border in the tertiary color (#2e236c).
- **Level 2 (Popovers/Modals):** These use a backdrop blur (12px) with a semi-transparent dark purple fill (60% opacity) and a primary purple glow-shadow.
- **Glow Effects:** Critical interactive elements use a "Neon Drop Shadow." Instead of black, shadows use the primary purple (#bc13fe) at 20-40% opacity with a large blur radius (15px-30px) to simulate light emission.

## Shapes

The shape language is **Soft-Tech**. Elements use a consistent 0.25rem (4px) corner radius to feel precise and engineered rather than organic or friendly. 

- Large containers (Cards) use `rounded-lg` (8px).
- Small components (Buttons, Inputs) use the base `rounded` (4px).
- Status pips and small avatars may use circular shapes to provide a break from the rigid grid.

## Components

- **Buttons:** Primary buttons are solid #bc13fe with white or black text. In hover states, they emit an external purple glow. Ghost buttons use a 1px #bc13fe border.
- **Inputs:** Dark backgrounds (#0d0b1f) with a 1px #2e236c border. On focus, the border transitions to #bc13fe with a subtle 4px outer glow.
- **Cards:** Use #16132b fill. Headers within cards should be separated by a thin 1px line in #2e236c.
- **Chips/Badges:** Use Space Mono for text. Backgrounds should be highly desaturated purples with high-vibrancy text colors.
- **Lists:** Rows should be separated by 1px dividers. Hover states on list items should utilize a subtle lateral purple gradient (left to right, 10% opacity).
- **Data Visuals:** Charts and graphs must strictly use the Primary Purple and Secondary Indigo, with Magenta as a tertiary data point. Grid lines in charts should be #2e236c at 50% opacity.