import './about.css'
import EventImg from '../../assets/img/event.png'
import PlateImg from '../../assets/img/food.png'
const AboutUs = () =>{
    return (
        <>
            <div className='about-container'>
                <img src={EventImg} className='event-img' alt='event '/>
                <p className='about-text-over-img'>ABOUT US</p>
            </div>
            <div className='about-us-container'>
                <div>
                    <h3 className='about-title'>RIMOS Produktai</h3>
                    <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam vero quis ex dolorem fugiat, tempore quo blanditiis quae, fuga, esse ut officiis sequi ipsa reiciendis unde culpa provident veritatis totam quidem voluptate aspernatur reprehenderit! Soluta odio nostrum excepturi doloribus quaerat magni quia numquam facilis earum quidem. Quasi, eum non.</p>
                </div>
                <div className='food-img-container'>
                    <img src={PlateImg} className='food-img' alt='food'/>
                </div>
            </div>
        </>
    )
} 
export default AboutUs