import React, { Suspense } from "react"
import {
  Button,
  ButtonGroup,
  chakra,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Stack,
  useBreakpointValue,
  useColorModeValue as mode,
  useDisclosure,
} from "@chakra-ui/react"
import ThemeToggle from "./theme-toggle"
import { AiOutlineMenu, AiOutlineClose, AiOutlinePoweroff } from "react-icons/ai"
import { Link, useMutation } from "blitz"
import { useCurrentUser } from "../hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  return (
    <>
      {currentUser ? (
        <>
          <Button colorScheme="brand">Polls</Button>
          <IconButton
            aria-label="Logout"
            icon={<Icon as={AiOutlinePoweroff} />}
            onClick={async () => {
              await logoutMutation()
            }}
            colorScheme="brand"
            title="Logout"
          />
        </>
      ) : (
        <>
          <Link href="/login">
            <Button colorScheme="brand">Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="brand">Signup</Button>
          </Link>
        </>
      )}
    </>
  )
}
const Navbar = () => {
  const mobileNav = useDisclosure()
  const mobileStyle = {
    bg: mode("gray.100", "gray.800"),
    direction: "column",
    pos: "fixed",
    shadow: "base",
    w: "full",
    spacing: 0,
  }

  return (
    <chakra.header pos="sticky" layerStyle="card" shadow="base">
      <Flex px={5} py={2}>
        <Heading size="lg" alignSelf="center" textTransform="capitalize">
          {process.env.siteName}
        </Heading>
        <Spacer />
        <IconButton
          aria-label="Open Mobile Menu"
          icon={<Icon as={AiOutlineMenu} />}
          onClick={mobileNav.onToggle}
          display={{ md: "none" }}
        />
        <ButtonGroup
          as={Stack}
          direction="row"
          shadow="none"
          size="sm"
          top={0}
          left={0}
          p={2}
          variant="ghost"
          display={{ base: mobileNav.isOpen ? "" : "none", md: "initial" }}
          {...useBreakpointValue({ base: mobileStyle, md: {} })}
        >
          <IconButton
            aria-label="Close Mobile Menu"
            icon={<Icon as={AiOutlineClose} />}
            onClick={mobileNav.onToggle}
            display={{ md: "none" }}
          />
          <Suspense fallback="">
            <UserInfo />
          </Suspense>
          <ThemeToggle />
        </ButtonGroup>
      </Flex>
    </chakra.header>
  )
}

export default Navbar
