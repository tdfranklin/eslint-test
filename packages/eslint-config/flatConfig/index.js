import { eslintRules } from './eslintRules.js'
// import { globalRules } from './globalRules.js'
import { importRules } from './importRules.js'
import { jsxA11yRules } from './jsxA11yRules.js'
import { prettierRules } from './prettierRules.js'
import { reactRules } from './reactRules.js'
import { typescriptRules } from './typescriptRules.js'

export default [
  // ...globalRules,
  ...eslintRules,
  ...jsxA11yRules,
  ...reactRules,
  ...importRules,
  ...typescriptRules,
  ...prettierRules,
]
