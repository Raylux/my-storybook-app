import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    // Intercetta automaticamente le funzioni che iniziano con "on"
    actions: { argsTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        // Abilita i controlli per le props di tipo colore (sempre con regex)
        color: /(background|color)$/i,
        // Abilita i controlli per le props di tipo data
        date: /Date$/,
      },
    },
  },
};

export default preview;