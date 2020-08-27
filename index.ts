import { Options } from 'prettier'

interface Override {
  files: string[]
  excludeFiles?: string[]
  options: Options
}

interface PrettyJBH extends Options {
  overrides?: Override[]
}

const prettyJBH: PrettyJBH = {
  singleQuote: true,
  arrowParens: 'avoid',
  semi: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'none',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['manifest.yml', 'manifest.yaml'],
      options: {
        singleQuote: false
      }
    }
  ]
}

export default prettyJBH
