import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-gradient: linear-gradient(135deg, #fff7ad 0%, #ffa9f9 100%);
    --text-color: #2c3e50;
    --text-color-light: #34495e;
    --border-color: #e0e0e0;
    --title-gradient: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--primary-gradient);
    color: var(--text-color);
    overflow-x: hidden;
  }

  section {
    min-height: 100vh;
    padding: 4rem 2rem;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-color);
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
`; 