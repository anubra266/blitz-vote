import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Box, Heading } from "@chakra-ui/react"

const Home: BlitzPage = () => {
  return (
    <Box layerStyle="card" shadow="base" rounded="md" mx={3} mt={5} p={4}>
      <Heading>Home</Heading>
    </Box>
  )
}

Home.suppressFirstRenderFlicker = true
// Home.redirectAuthenticatedTo = "/"
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
