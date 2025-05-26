import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>✴ nextra</span>,

  project: {
    link: 'https://github.com/your-username/your-repo' // GitHub icon
  },

  docsRepositoryBase: 'https://github.com/your-username/your-repo/blob/main',

  primaryHue: 200, // Customize color

  navigation: {
    next: true,
    prev: true,
  },

  search: {
    placeholder: 'Search documentation...',
  },

  // Header links
  header: {
    title: 'Documentation',
    logoLink: '/',
  },

  // Optional: Add custom nav links like Blog, API, Versions, etc.
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Your Project',
    }
  },

  footer: {
    text: 'MIT © 2025 Your Name',
  }
}

export default config
