import { Link } from 'react-router-dom'

import './Footer.css'

export default function Footer() {
    return(
        <footer>
            <div className="footerRow">
                <div className="footerCol">
                    <img id='homeNavIcon2' src='/images/black_white_logo.png' alt="site logo" className="logo"/>
                    <p>This is a personal project in which i've used React and Express to make a fullstack 'review' web application.</p>
                </div>
                <div className="footerCol">
                    <h3>Office <div className='underline'><span></span></div> </h3>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1036.6487422982257!2d23.35143489804782!3d42.70191200451514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbg!2sbg!4v1701873701863!5m2!1sbg!2sbg" width="200" height="100"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <p>България</p>
                    <p>София</p>
                    <p>ул. Незнам коя 21</p>
                    <p className='email-id'>rumenmoysev@gmail.com</p>
                    <h4>+359 87777878</h4>
                </div>
                <div className="footerCol">
                    <h3>Links <div className='underline'><span></span></div> </h3>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/reviews'}>Reviews</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contacts'}>Contacts</Link></li>
                    </ul>
                </div>
                <div className="footerCol">
                    <h3>Socials <div className='underline'><span></span></div> </h3>
                    <div className='socialIcons'>
                        <Link to={'https://www.facebook.com/rumen.moysev/'}><img src='/images/logo-facebook.svg' className='socialIcon'/></Link>
                        <Link to={'https://www.instagram.com/rumen_moysev/'}><img src='/images/logo-instagram.svg' className='socialIcon' /></Link>
                        <Link to={'https://github.com/RumenMoysev'}><img src='/images/logo-github.svg' className='socialIcon' /></Link>
                        <Link to={'https://twitter.com/RMoysev'}><img src='/images/logo-twitter.svg' className='socialIcon' /></Link>
                    </div>
                </div>
            </div>
            <hr/>
            <p className='copyright'>Rumen Moysev © 2023 - All Rights Reserved</p>
        </footer>
    )
}