import { RequiredStringSchema } from 'yup/lib/string'

export default function useYupStringValidator(
  validateSchema: RequiredStringSchema<string | null | undefined>,
  stringToValidate: string
): string[]
