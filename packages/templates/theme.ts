import type { Properties } from 'csstype';
import { TailwindConfig } from "tw-to-css"

const theme = {
  theme: {
    extend: {
      colors: {
        brand: "#007291",
      },
    },
  },
} satisfies TailwindConfig

export default theme