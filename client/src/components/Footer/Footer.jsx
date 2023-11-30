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
                    <p>NQKUDE si</p>
                    <p>България</p>
                    <p>sofiq, nqkoq ulica</p>
                    <p className='email-id'>rumenmoysev@gmail.com</p>
                    <h4>+359 87777878</h4>
                </div>
                <div className="footerCol">
                    <h3>Links <div className='underline'><span></span></div> </h3>
                    <ul>
                        <li><Link to={'/test'}>Home</Link></li>
                        <li><Link to={'/test'}>Services</Link></li>
                        <li><Link to={'/test'}>About</Link></li>
                        <li><Link to={'/test'}>Contacts</Link></li>
                    </ul>
                </div>
                <div className="footerCol">
                    <h3>Socials <div className='underline'><span></span></div> </h3>
                    <div className='socialIcons'>
                        <img src='/images/logo-facebook.svg' className='socialIcon'/>
                        <img src='/images/logo-instagram.svg' className='socialIcon' />
                        <img src='/images/logo-github.svg' className='socialIcon' />
                        <img src='/images/logo-twitter.svg' className='socialIcon' />
                    </div>
                </div>
            </div>
            <hr/>
            <p className='copyright'>Rumen Moysev © 2023 - All Rights Reserved</p>
        </footer>
    )
}