import * as Yup from "yup";


export const FormSchema = Yup.object({
  // name:Yup.string().min(3).max(20).required('Name is Must'),
  // email:Yup.string().email().required('Email is Must')

  name:Yup.string().min(3,'To Short').max(20,'To Long').required('Name is Must'),
  email:Yup.string().email().required('Email is Must'),
  age:Yup.number().min(10).max(45).required("Age Is Must"),
  pass:Yup.string()
  .required("Password is Must")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Enter Strong Password"),
  cpass:Yup.string().required("Confirm Password Is must")
  .oneOf([Yup.ref('pass'),null],"Password Does Not match")
})