import { useRouter, BlitzPage } from "blitz"
import AuthLayout from "app/core/layouts/AuthLayout"
import { SignupForm } from "app/auth/components/SignupForm"
import { Flex } from "@chakra-ui/react"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Flex justify="center">
      <SignupForm onSuccess={() => router.push("/")} />
    </Flex>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <AuthLayout title="Sign Up">{page}</AuthLayout>

export default SignupPage
