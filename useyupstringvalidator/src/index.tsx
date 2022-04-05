import { useMemo } from 'react'
import { RequiredStringSchema } from 'yup/lib/string'

const getErrors = (
  validateSchema: RequiredStringSchema<string | null | undefined>,
  stringToValidate: string
) => {
  try {
    validateSchema.validateSync(stringToValidate, {
      abortEarly: false,
      strict: false,
    })
    return []
  } catch (err: any) {
    return err?.errors
  }
}

const useYupStringValidator = (
  validateSchema: RequiredStringSchema<string | null | undefined>,
  stringToValidate: string
): string[] => {
  return useMemo(() => {
    return getErrors(validateSchema, stringToValidate)
  }, [validateSchema, stringToValidate])
}

export default useYupStringValidator
