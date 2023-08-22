import { withInstall } from '@catopia-ui/utils'

import Button from './src/button.vue'

export const VButton = withInstall(Button)
export default VButton

export * from './src/button'
export type { ButtonInstance } from './src/instance'
