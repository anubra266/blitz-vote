import { AuthenticationError, Link, useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import AuthForm from "./AuthForm"
import { Box } from "@chakra-ui/react"

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <AuthForm title="Login">
      <Form
        submitText="Login"
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await loginMutation(values)
            props.onSuccess?.()
          } catch (error) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" isRequired />
        <LabeledTextField
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          isRequired
        />
        <div>
          <Link href="/forgot-password">
            <a>Forgot your password?</a>
          </Link>
        </div>
      </Form>

      <Box mt={4} fontSize="sm">
        Or <Link href="/signup">Sign Up</Link>
      </Box>
    </AuthForm>
  )
}

export default LoginForm
