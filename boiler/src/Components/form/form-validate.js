export const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.phone_number) {
    errors.phone_number = 'Required'
  } else if (values.phone_number.length < 10) {
    errors.firstName = 'Must be a valid phone number'
  }

  if (!values.creditCardNumber) {
    errors.creditCardNumber = 'Required'
  } else if (values.creditCardNumber.length < 10) {
    errors.creditCardNumber = 'Must be a valid credit card'
  }

  if (!values.cvd) {
    errors.cvd = 'Required'
  }

  if (!values.expiry_month) {
    errors.expiry_month = 'Required'
  } else if (values.creditCardNumber.expiry_month >12) {
    errors.expiry_month = 'Must be a expiry year'
  }

  if (!values.expiry_year) {
    errors.expiry_year = 'Required'
  }


  if (!values.address_line1) {
    errors.address_line1 = 'Required'
  }


  if (!values.city) {
    errors.city = 'Required'
  }


  if (!values.province) {
    errors.province = 'Required'
  }


  if (!values.postal_code) {
    errors.postal_code = 'postal_code'
  }


  if (!values.postal_code) {
    errors.postal_code = 'Required'
  } 

  if (!values.password) {
    errors.password = 'Required'
  } 

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  }
  else if(values.password!==values.confirmPassword)
  {
    errors.confirmPassword ='Passwords must match'
  } 

  // if (!values.termsCheckbox) {
  //   errors.termsCheckbox = 'Please agree to terms and conditions'
  // } 

  return errors
}
