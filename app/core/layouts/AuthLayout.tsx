import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Head, Link } from "blitz"
import ThemeToggle from "./theme-toggle"
import { useColorModeValue as mode, useTheme, css } from "@chakra-ui/react"
import { Global } from "@emotion/react"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const AuthLayout = ({ title, children }: LayoutProps) => {
  const theme = useTheme()

  const styles = css({
    body: {
      bgGradient: mode("linear(to-l, brand.400, brand.500, purple.500, purple.600)", ""),
    },
  })(theme)

  return (
    <>
      <Global styles={styles} />
      <Head>
        <title>{title || process.env.siteName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <ThemeToggle pos="absolute" top={5} right={5} variant="solid" colorScheme="gray" />
        <Box pos="fixed" top="50%" left="50%" transform="translate(-50%,-50%)">
          <Heading textAlign="center">
            <Link href="/">Blote</Link>
          </Heading>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default AuthLayout
