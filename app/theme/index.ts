import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react"
import styles from "./styles"
import colors from "./colors"
import components from "./components"

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const overrides: ThemeOverride = {
  config,
  styles,
  colors,
  components,
}

export default extendTheme(overrides)
