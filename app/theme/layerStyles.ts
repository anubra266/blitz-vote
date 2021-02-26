import { useColorModeValue as mode } from "@chakra-ui/react"

const layerStyles = {
  card: () => ({
    bg: mode("white", "gray.700"),
  }),
}
export default layerStyles
