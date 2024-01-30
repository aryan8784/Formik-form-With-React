import { ErrorMessage, Field, Form, Formik } from 'formik'
// import React, { useState } from 'react'
import * as yup from "yup"
import RedErrorMessage from './RedErrorMessage'

const FormikFormComp = () => {

  // const [formData, setFormData] = useState({});
  const NewValidations = yup.object({
    name: yup.string().required("Name Is Must"),
    age: yup.number().min(10).max(50).required("Age Is Must"),
    pass: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Enter Strong Password").required("Password Is Must"),
    gender: yup.string().required("Gender Is Must"),
    // hobby:yup.array().min(1,"One Hobby Is Must")
    hobby: yup.array().min(1),
    country: yup.string().required("Country Is must"),
    comment:yup.string().max(500).required("Comment Is Must")

  })


  return (
    <>
      <div>
        <Formik
          validationSchema={NewValidations}
          initialValues={{ name: "", age: "", pass: "", gender: "", hobby: [], Country: "", comment: "", }}
          onSubmit={(values) => {
            console.log(values)
            // setFormData(values)
          }}
        >
          <Form>
            <label htmlFor="name">Enter Name : </label>
            <Field type="text" name="name" />
            <br />
            {/* <ErrorMessage name='name'/> */}
            <RedErrorMessage name="name" />
            <br />
            <label htmlFor="age">Enter Age : </label>
            <Field type="number" name="age" />
            <RedErrorMessage name="age" />
            <br />
            <label htmlFor="pass">Enter Password : </label>
            <Field type="password" name="pass" />
            <RedErrorMessage name="pass" />
            <br />
            <label htmlFor="">Gender: </label>
            <label htmlFor="">Male</label>
            <Field type="radio" name="gender" value="Male" />
            <label htmlFor="">Female</label>
            <Field type="radio" name="gender" value="Female" />
            <RedErrorMessage name="gender" />
            <br />
            <label htmlFor="">Hobbies: </label>
            <Field type="checkbox" name="hobby" value="Writting" />
            <label htmlFor="">Writting  &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Music" />
            <label htmlFor="">Music &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Read" />
            <label htmlFor="">Read &nbsp;</label>
            <RedErrorMessage name="hobby" />
            <br />
            <label htmlFor="">Country : </label>
            <Field name="country" as="select">
              <option value="" >Select</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="PAK">PAK</option>
              <option value="INDIA">INDIA</option>
            </Field>
            <RedErrorMessage name="country" />
            <br />
            <label htmlFor="">Comments : </label>
            <Field as="textarea" name="comment" />
            <RedErrorMessage name="comment" />
            <br /><br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>


        {/* <h1>{JSON.stringify(formData)}</h1> */}
        {/* <h1>{formData.name}</h1>
        <h1>{formData.age}</h1> */}
      </div>
    </>
  )
}

export default FormikFormComp