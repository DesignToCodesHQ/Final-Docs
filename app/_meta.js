export default {
    index: {
      title: '🏠 Home'
    },
  
    // Collapsible group
    elementor: {
      title: '📦 Elementor Templates',
      type: 'menu',
      items: {
        import: {
          title: '🔄 Import'
        },
        export: {
          title: '📤 Export'
        },
        nested: {
          title: '🧬 Advanced Topics',
          type: 'menu',
          items: {
            nesting1: {
              title: 'Nested 1'
            },
            nesting2: {
              title: 'Nested 2'
            }
          }
        }
      }
    },
  
    divider2: {
      type: 'separator'
    },
  
    externalLinks: {
      title: '🌐 External',
      type: 'menu',
      items: {
        website: {
          title: '🌍 DesignToCodes',
          type: 'page',
          href: 'https://designtocodes.com',
          newWindow: true
        }
      }
    }
  }
  