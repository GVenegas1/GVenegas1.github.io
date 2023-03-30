import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoG from '../../assets/images/G-logo.png'
import LogoSubtitle from '../../assets/images/venegas-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faCode, faJournalWhills, faBookJournalWhills, faCodeCommit }from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoG} alt="logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="venegas" />
    </Link>
    <nav>
        <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/"
        >
            <FontAwesomeIcon icon={faHome} color='FBE563' />
        </NavLink>

        <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about"
        >
            <FontAwesomeIcon icon={faUser} color='FBE563' />
        </NavLink>
        <NavLink 
            exact="true" 
            activeclassname="active" 
            className="portfolio-link" 
            to="/portfolio"
        >
            <FontAwesomeIcon icon={faCode} color='FBE563' />
        </NavLink>

        <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
        >
            <FontAwesomeIcon icon={faEnvelope} color='FBE563' />
        </NavLink>
       

    </nav>

    <ul>
        <li>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/gabriel-venegas-591ab818b/"
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/GVenegas1"
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/GVCodes"
            >
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
        </li>
    </ul>
</div>
)

export default Sidebar 