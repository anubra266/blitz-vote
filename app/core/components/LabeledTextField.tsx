import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { forwardRef, PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  isRequired?: boolean
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, label, outerProps, isRequired, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse: props.type === "number" ? Number : undefined,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError
    const isInvalid = touched && normalizedError
    return (
      <FormControl isInvalid={isInvalid} {...outerProps} isRequired={isRequired}>
        <FormLabel fontWeight="bold">{label}</FormLabel>
        <Input focusBorderColor="brand.300" {...input} disabled={submitting} {...props} ref={ref} />

        {isInvalid && <FormErrorMessage> {normalizedError}</FormErrorMessage>}
      </FormControl>
    )
  }
)

export default LabeledTextField
