import { css } from "@emotion/react";

const GlobalStyles = css`

  /* kumbh-sans-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/kumbh-sans-v26-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* kumbh-sans-800 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/kumbh-sans-v26-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  :root {
    /* COLORS */
    --white: hsl(0, 100%, 100%);
    --black: hsl(0, 0%, 0%);
    --grey-950: hsl(220, 13%, 13%);
    --grey-500: hsl(219, 9%, 45%);
    --grey-500: hsl(221, 22%, 81%);
    --grey-100: hsl(219, 35%, 92%);
    --grey-050: hsl(223, 64%, 98%);
    --orange-500: hsl(26, 100%, 55%);
    --orange-300: hsl(26, 100%, 71%);

    /* FONT WEIGHTS */
    --fw-regular: 400;
    --fw-bold: 800;

    /* FONT SIZES */
    --fs-44: calc(44 / 16 * 1rem);
    --fs-28: calc(28 / 16 * 1rem);
    --fs-16: calc(16 / 16 * 1rem);
    --fs-15: calc(15 / 16 * 1rem);
    --fs-13: calc(13 / 16 * 1rem);
    --fs-12: calc(12 / 16 * 1rem);

    /* LINE HEIGHTS */
    --lh-48: calc(48 / 44);
    --lh-32: calc(32 / 28);
    --lh-26: calc(26 / 16);
    --lh-16: calc(16 / 13);
    --lh-15: calc(15 / 12);

    /* SPACING */
    --spacing-0000: calc(0 / 16 * 1rem);
    --spacing-0100: calc(8 / 16 * 1rem);
    --spacing-0200: calc(16 / 16 * 1rem);
    --spacing-0300: calc(24 / 16 * 1rem);
    --spacing-0400: calc(32 / 16 * 1rem);
    --spacing-0500: calc(40 / 16 * 1rem);
    --spacing-0600: calc(48 / 16 * 1rem);
    --spacing-0700: calc(56 / 16 * 1rem);
    --spacing-0900: calc(72 / 16 * 1rem);
    --spacing-1000: calc(80 / 16 * 1rem);
    --spacing-1200: calc(96 / 16 * 1rem);
    --spacing-1300: calc(104 / 16 * 1rem);
    --spacing-1600: calc(128 / 16 * 1rem);
  }

  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Enable keyword animations */
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    font-family: 'Kumbh Sans';
    /* 4. Add accessible line-height */
    line-height: var(--lh-16);
    /* 5. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }

  /* 6. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 7. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 9. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  /*
    10. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
  
`;

export default GlobalStyles