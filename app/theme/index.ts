import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react"
import styles from "./styles"
import layerStyles from "./layerStyles"
import colors from "./colors"
import components from "./components"

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const overrides: ThemeOverride = {
  colors,
  components,
  config,
  layerStyles,
  styles,
}

export default extendTheme(overrides)
