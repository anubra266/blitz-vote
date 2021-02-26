import { useRouter, BlitzPage } from "blitz"
import AuthLayout from "app/core/layouts/AuthLayout"
import { LoginForm } from "app/auth/components/LoginForm"
import { Flex } from "@chakra-ui/react"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Flex justify="center">
      <LoginForm
        onSuccess={() => {
          const next = (router.query.next as string) ?? "/"
          router.push(next)
        }}
      />
    </Flex>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <AuthLayout title="Log In"> {page}</AuthLayout>

export default LoginPage
