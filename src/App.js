import React from 'react';
import Form from './Form';
import Hom1 from './Hom1';
import Hom from './Hom';
import Sign from './Sign ';
import { Route,Routes } from  'react-router-dom';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Hom/>}/>
    <Route path="/Sign" element={<Sign/>}/>
    <Route path="/Form" element={<Form/>}/>
    <Route path="/Hom" element={<Hom/>}/>
    <Route path="/Men" element={<Hom1/>}/>
    </Routes>
    </>
  )
}
export default App;
