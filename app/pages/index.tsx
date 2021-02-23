import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Box } from "@chakra-ui/react"



const Home: BlitzPage = () => {

  return (
    <Box>

    </Box>
  )
}

Home.suppressFirstRenderFlicker = true
// Home.redirectAuthenticatedTo = "/"
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
