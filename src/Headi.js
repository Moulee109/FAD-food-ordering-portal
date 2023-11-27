import  './shead.css';
import l from './images/logo2.jpg';
import {ShoppingBag} from 'lucide-react';
import {Link} from 'react-router-dom';
const Headi = () =>{
    return(
        <>
        

        <div className='sh'>

            <div className='lo'>
                <img src={l} alt="" width={60} height={60}/>
            </div>

        <ul className='m'>
            <Link to="/Hom"><li>Home</li></Link>
            <Link to="/Men"><li>Menu</li></Link>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        
        <div className='si'>
            <div className='c'>
                 <ShoppingBag size={25}/>
                 <div className='ba'>0</div>
            </div>
        </div>

        </div>

        
        </>
    )
}
export default Headi;