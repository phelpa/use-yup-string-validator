# `React use-yup-string-validator`

## Install

```sh
yarn add react-use-yup-string-validator
```

## Usage

React use-yup-string-validator is a hook that receives a string and a yup string validator and return an array of errors. Here is some example code:

```jsx
import React from 'react'
import useYupStringValidator from 'use-yup-string-validator'

//the string schema
const ValidationPassword = Yup.string()
  .required('')
  .matches(/[0-9]/, '× Must have a number')
  .matches(/[a-z]/, '× Must have an lowercase letter')
  .matches(/[A-Z]/, '× Must have an uppercase letter')
  .matches(/[!#@$%^&*)(+=._-]/, '× Must have a symbol')
  .min(6, '× Must have at least 6 characters')
  .nullable()

const App = () => {
  const password = '123456'
  const passwordErrors = useYupFieldValidator(ValidationPassword, password)

  /*
    the array of errors will be [
    'Must have an lowercase letter',
    'Must have an uppercase letter',
    'Must have a symbol']
  */

  return (
    <>
      {passwordErrors.map((error) => (
        <div>{error}</div>
      ))}
    </>
  )
}
```
