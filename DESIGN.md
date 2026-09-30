---
name: Koyeb Editorial AI Portfolio
colors:
  ink: '#000000'
  canvas: '#e6e5de'
  surface-dark: '#181618'
  surface-darker: '#24292e'
  accent: '#2eff9b'
  accent-deep: '#0adb76'
  white: '#ffffff'
  navy: '#101828'
  body: '#364153'
  muted-cool: '#4a5565'
  muted-soft: '#6a7282'
  muted: '#656565'
  cool-gray: '#99a1af'
  ink-soft: '#5b5a58'
  ink-muted: '#434446'
  warm-mute: '#bbbab3'
  surface-warm: '#d9d8d4'
  surface-mute: '#d1d5dc'
  hairline: '#e5e7eb'
  hairline-soft: '#f3f4f6'
  surface: '#fbf9f2'
  surface-dim: '#dbdad3'
  surface-bright: '#fbf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ed'
  surface-container: '#efeee7'
  surface-container-high: '#e9e8e1'
  surface-container-highest: '#e4e3dc'
  on-surface: '#1b1c18'
  on-surface-variant: '#4a454a'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f2f1ea'
  outline: '#7b757a'
  outline-variant: '#ccc4c9'
  surface-tint: '#615d60'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1d1b1d'
  on-primary-container: '#878385'
  inverse-primary: '#cbc5c8'
  secondary: '#006d3e'
  on-secondary: '#ffffff'
  secondary-container: '#2dff9b'
  on-secondary-container: '#007240'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#171c21'
  on-tertiary-container: '#7f848a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e7e1e3'
  primary-fixed-dim: '#cbc5c8'
  on-primary-fixed: '#1d1b1d'
  on-primary-fixed-variant: '#494648'
  secondary-fixed: '#59ffa4'
  secondary-fixed-dim: '#00e386'
  on-secondary-fixed: '#00210f'
  on-secondary-fixed-variant: '#00522d'
  tertiary-fixed: '#dee3e9'
  tertiary-fixed-dim: '#c2c7cd'
  on-tertiary-fixed: '#171c21'
  on-tertiary-fixed-variant: '#42474d'
  background: '#fbf9f2'
  on-background: '#1b1c18'
  surface-variant: '#e4e3dc'
typography:
  display:
    fontFamily: Anton, Oswald, Impact, sans-serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: normal
  heading:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1px
  body:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: normal
  button:
    fontFamily: ui-sans-serif, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  display-lg:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: 0px
  display-lg-mobile:
    fontFamily: Anton
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: 0px
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -1px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.5px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.5px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  xxl: 16px
  DEFAULT: 0.25rem
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 64px
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xxs: 0.25rem
  space-xs: 0.375rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-xxl: 2rem
  space-section: 4rem
components:
  announcement-bar:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.ink}'
    typography: '{typography.button}'
    padding: 16px
  top-nav:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.ink}'
    typography: '{typography.button}'
    rounded: '{rounded.xxl}'
    padding: 12px 16px
  nav-link:
    backgroundColor: transparent
    textColor: '{colors.ink}'
    typography: '{typography.button}'
  button-primary:
    backgroundColor: '{colors.surface-dark}'
    textColor: '{colors.white}'
    typography: '{typography.button}'
    rounded: '{rounded.lg}'
    padding: 16px 24px
  card:
    backgroundColor: '{colors.white}'
    textColor: '{colors.ink}'
    rounded: '{rounded.sm}'
  feature-card:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.ink}'
    typography: '{typography.body}'
    rounded: '{rounded.xxl}'
    padding: 24px
  section-dark:
    backgroundColor: '{colors.surface-dark}'
    textColor: '{colors.white}'
    typography: '{typography.body}'
    padding: 64px
  terminal-card:
    backgroundColor: '{colors.surface-dark}'
    textColor: '{colors.accent}'
    typography: '{typography.button}'
    rounded: '{rounded.xxl}'
    padding: 24px
  stat-block:
    backgroundColor: '{colors.surface-darker}'
    textColor: '{colors.white}'
    typography: '{typography.display}'
    rounded: '{rounded.xxl}'
    padding: 32px
  badge-pill:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.ink}'
    typography: '{typography.button}'
    rounded: '{rounded.lg}'
    padding: 6px 12px
---

