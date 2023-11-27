import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import i from './images/FoodS-PNG.png';
import './fes.css';
import {Link }from 'react-router-dom';
const Des = ()=>{
    return(
        <>
        <div className="d1">

           <div className='l'>

           <div className="d2">
               
            <span>Delivers Faster!</span>
            <DeliveryDiningRoundedIcon fontSize='large'/>
            </div>  

            <div className='d3'>
                  <span>Enjoy Your Life.. </span>
                  <span>By Tasting the food by</span>
                  <span style={{color:"red"}}>FAD</span>
            </div>
            <span className='d4'>Sharing is a Quality That starts from the food, it travels along with us till our end of life.
            Laughter is brightest in the place where the food is.
            </span>
            <Link to={'/Form'}><button className='d5'>Let's Go</button></Link>

            </div>

            <div className='r'>
                 
                 <div className='d6'>
                    <img src={i} alt="" layout="intrinsic"/>
                 </div>

            </div>
            
        </div>
            </>
    )
}
export default Des;