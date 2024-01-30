import React from 'react'
import PropTypes, { string } from 'prop-types'


const Propstypes = (props) => {
  return (
    <>
      <div>
        <h1>Hy {props.name}</h1>
        <h1>My Age {props.age}</h1>
        <h1>hy {props.isMarried.toString()}</h1>
        <h1>hy {String(props.isMarried)}</h1>
        <h1>{props.arr}</h1>
        <h1>{props.arr[3]}</h1>
      </div>
    </>
  )
}


Propstypes.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  age:PropTypes.bool,
  arr:PropTypes.array,
}





export default Propstypes