import './bel.css';
import React from 'react'
import i1 from './images/imge1.png';
import i2 from './images/imge2.jpg';
import i3 from './images/imge3.png';
export default function Bel() {
  return (
    <>
    <div className='b1'>

       <span>We Are</span>
       <span>Here To Serve You</span>
       <span>Being The Fastest</span>

    </div>

    <div className='b2'>

       <div className='b3'>

        <div className='b4'>
        <img src={i1} alt="" objectFit='cover' layout='intrinsic' height={150} width={150}/>
        </div>
        <span>Hungry!</span>
        <span>Food will reach you when you order, So Order Now !</span>
       </div>

       <div className='b3'>

        <div className='b4'>
        <img src={i2} alt="" objectFit="cover" layout="intrinsic" height={150} width={150}/>
        </div>
        <span>Taste the Food</span>
        <span>Feel It Love It, 
          Your order Will be served</span>
       </div>

       <div className='b3'>

        <div className='b4'>
        <img src={i3} alt="" objectFit='cover' layout='intrinsic' height={150} width={150}/>
        </div>
        <span>Food Delivery</span>
        <span>Food will be delivered At Your Door That's FAD</span>
       </div>

      
    </div>
    </>
  )
}
