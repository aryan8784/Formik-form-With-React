import React from 'react'
import { useFormik } from "formik"
import { FormSchema } from './FormSchema'
const FormikForm = () => {

  const formInitialValues = {
    name: "",
    email: "",
    age: "",
    pass: "",
    cpass: "",
  }



  // const formik = useFormik({
  //   initialValues: formInitialValues,
  //   onSubmit:(values)=>{
  //     console.log(values)
  //     console.log(values.name)
  //     console.log(values.email)
  //   }
  // })



  const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
    initialValues: formInitialValues,
    validationSchema: FormSchema,
    onSubmit: (values, action) => {
      console.log(values)
      console.log(values.name)
      console.log(values.email)
      console.log(values.age)
      console.log(values.pass)
      console.log(values.cpass)
      action.resetForm();
    }
  })




  return (
    <>
      <div>
        <h1>Formik Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter Name : </label>
          <input type="text" name='name' onBlur={handleBlur} onChange={handleChange} value={values.name} />
          <br />
          {errors.name && touched.name ? (<span style={{ color: "red" }}>{errors.name}</span>) : null}
          <br /><br />
          <label htmlFor="email">Enter Email : </label>
          <input type="text" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} />
          <br />
          {errors.email && touched.email ? (<span style={{ color: "red" }}>{errors.email}</span>) : null}
          <br /><br />
          <label htmlFor="age">Enter Age : </label>
          <input type="text" name='age' onBlur={handleBlur} onChange={handleChange} value={values.age} />
          <br />
          {errors.age && touched.age ? (<span style={{ color: "red" }}>{errors.age}</span>) : null}
          <br /><br />
          <label htmlFor="pass">Enter Password : </label>
          <input type="text" name='pass' onBlur={handleBlur} onChange={handleChange} value={values.pass} />
          <br />
          {errors.pass && touched.pass ? (<span style={{ color: "red" }}>{errors.pass}</span>) : null}
          <br /><br />
          <label htmlFor="cpass">Enter Confirm Password : </label>
          <input type="text" name='cpass' onBlur={handleBlur} onChange={handleChange} value={values.cpass} />
          <br />
          {errors.cpass && touched.cpass ? (<span style={{ color: "red" }}>{errors.cpass}</span>) : null}
          <br /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default FormikForm