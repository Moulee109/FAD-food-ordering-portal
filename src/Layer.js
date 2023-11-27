import React from 'react'
import Headi from './Headi';
import Foot from './Foot';
const Layer = ({children}) => {
  return (
    <>
      <Headi/>
       {children}
      <Foot/>
    </>
  )
}
export default Layer;