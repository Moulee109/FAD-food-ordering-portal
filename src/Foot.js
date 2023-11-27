import './foot.css';
import w from './images/WhatsApp_icon.png';
import t from './images/twitter-png.png';
import i from './images/instagram-png.png';
import f from './images/Facebook-png.png';
import l from './images/logo2.jpg';
import pla from './images/playstore.jpg.png';
import aps from './images/appstore.png';
const Foot=()=>{
    return(
    <div className='f1'>
        <div className='f5'>
               <img src={l} alt="" height={150} width={150}/>
        </div>
        <span>Follow Us On</span>
        <div className='f'>
            <div className='f2'>
                <img src={w} alt="" height={50} width={50}/>
            </div>
            <div className='f3'>
                <img src={i} alt=""  height={55} width={55}/>
            </div>
            <div className='f4'>
                <img src={t} alt=""  height={30} width={35}/>
            </div>
            <div className='f6'>
                <img src={f} alt=""  height={35} width={40}/>
            </div>
        </div>
        <div className='so'>
            <div className='f7'>
                <img src={pla} alt="" height={200} width={200}/>
            </div>
            <div className='f8'>
                <img src={aps} alt="" height={74} width={168}/>
            </div>
        </div>
    </div>
    )
}
export default Foot;