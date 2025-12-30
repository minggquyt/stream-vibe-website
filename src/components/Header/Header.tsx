import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(){
    return (
        <div className="header">
            <img className='logo' src="/logo.webp" alt="" />
            <nav className="header__navbar">
                <Link to="/">Home</Link>
                <Link to="news">News</Link>
                <Link to="/podcasts">Podcasts</Link>
                <Link to="resources">Resources</Link>
            </nav>
            <button>Contact Us</button>
        </div>
    )
}