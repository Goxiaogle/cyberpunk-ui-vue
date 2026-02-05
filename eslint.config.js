import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      'storybook-static/**',
      '**/*.d.ts',
      'stories/**/*.ts', // 排除 Storybook stories 文件
    ],
  },
  {
    rules: {
      // 关闭一些对库开发不太适用的规则
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off', // 关闭属性换行强制要求
      'vue/singleline-html-element-content-newline': 'off',
      'vue/no-v-html': 'off', // SVG 渲染需要 v-html
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'any', // 允许 <input> 或 <input />
          normal: 'always',
          component: 'always',
        },
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_', // 忽略下划线开头的变量
        caughtErrorsIgnorePattern: '^_',
      }],
    },
  }
)
