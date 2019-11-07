import { CSSProp } from 'styled-components'

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}

declare module 'console' {
  export = typeof import("console");
}