import { mode } from "@chakra-ui/theme-tools"

const Button = {
  variants: {
    brand: (props: any) => ({
      bg: "brand.400",
      color: "white",
      _hover: {
        bg: "brand.500",
      },
    }),
  },
}
export default Button
