import React from 'react'
import Des from './Des';
import Layer from './Layer';
import './lay.css';
import Bel from './Bel';
export default function Hom({children}) {
  return (
    <Layer>
        {/* <div className='l1' style={{width:"100vw"}}>

            <head>

            </head>
            <main> */}
                <Des/>
                <Bel/>
            {/* </main>

        </div> */}
    </Layer>
  )
}

