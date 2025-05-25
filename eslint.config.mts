import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/no-multiple-template-root': 'off',
    'no-lonely-if': 'error',
    'no-console': 'error',
    'no-throw-literal': 'error',
    'array-element-newline': [
      'error',
      'always',
    ],
  },
})