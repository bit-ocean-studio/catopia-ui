const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2023: true
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'unused-imports'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.cjs',
          '.mjs',
          '.ts',
          '.cts',
          '.mts',
          '.tsx',
          '.d.ts',
          '.vue'
        ]
      }
    }
  },
  overrides: [
    {
      files: ['*.{js,cjs,mjs,jsx}'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off'
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    },
    {
      files: ['*.{ts,tsx,cts,mts}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: process.cwd(),
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  rules: {
    quotes: ['error', 'single'], // 强制使用单引号
    semi: ['error', 'never'], // 禁止使用分号
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'class-methods-use-this': 'off', // 允许类方法不使用 this
    'no-param-reassign': 'off', // 允许修改函数参数

    // unused-imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],

    // eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error', // import 排序
    'simple-import-sort/exports': 'error', // export 排序

    // eslint-plugin-import
    'import/order': 'off', // 禁用 import 排序，使用 simple-import-sort
    'import/first': 'error', // import 必须放在文件顶部
    'import/newline-after-import': 'error', // import 之后必须空一行
    'import/no-unresolved': 'off', // 允许导入未解析的模块
    'import/no-absolute-path': 'off', // 允许导入绝对路径
    'import/no-duplicates': 'error', // 禁止重复导入
    'import/extensions': 'off', // 允许导入时带文件扩展名
    'import/no-extraneous-dependencies': 'off', // 允许引入额外依赖
    'import/no-mutable-exports': 'error', // 禁止导出 let, var 声明的变量
    'import/no-self-import': 'error', // 禁止自导入
    'import/prefer-default-export': 'off', // 仅导出一个变量时，不要求默认导出

    // typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off', // 由 TS 静态检查
    '@typescript-eslint/comma-dangle': 'off', // 由 Prettier 处理
    '@typescript-eslint/consistent-type-imports': 'error', // 强制使用 import type
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false
      }
    ],

    // vue
    'vue/no-v-html': 'off', // 允许使用 v-html
    'vue/multi-word-component-names': 'off', // 允许单个单词的组件名，例如 index.vue
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ] // 优先 script，其次 template，最后 style
  }
})
