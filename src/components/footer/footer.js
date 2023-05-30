import './footer.css'
import Logo from '/Users/mantas/Desktop/Boolean/React/project/src/assets/img/logo-with-text.png'
function Footer(){
    return(
        <section className='footer'>
            <img src={Logo} className='footer-logo' alt=''/>
            <p>Rimos Produktai © <span>2023</span></p>
        </section>
    )
}
export default Footer