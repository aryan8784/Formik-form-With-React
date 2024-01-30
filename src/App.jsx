
import './App.css'
import FormikForm from './Components/FormikForm'
import FormikFormComp from './Components/FormikFormComp'
import Propstypes from './Components/Propstypes'

function App() {


  const freind = ["Aryan", "Abu Bakar", "Ali", "Akmal"]


  return (
    <>
      <div>
        {/* <Propstypes name="ARYAN" age={24} isMarried={false} arr={freind} /> */}
        {/* <FormikForm/> */}
        <h1>Formik Form</h1>
        <FormikFormComp/>
      </div>
    </>
  )
}

export default App
