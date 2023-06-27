import { NavLink } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import './header.scss';

const Header = () =>{
    return(
    <header>
        <h2>Karin<span>.</span>Lee</h2>
        <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Me</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='contact'>Contact</NavLink>
        </nav>
        <SocialMedia/>
    </header>)
    };
    export default Header;
    