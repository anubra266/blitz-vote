import { Box, Heading } from "@chakra-ui/react"
import React from "react"

const AuthForm = ({ title, children }) => {
  return (
    <>
      <Box shadow="base" p={10} layerStyle="card" w="md" mt={10} rounded="md" maxW="full">
        <Heading fontSize="2xl" textAlign="center" mb={10}>
          {title}
        </Heading>

        {children}
      </Box>
    </>
  )
}

export default AuthForm
