import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header__upper">
                <div className="header__upper--content inter-400">
                    <p>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
                    <img src="/header/headerarrow.webp" width="15px" height="15px" alt="" />
                </div>
            </div>
            <div className="header__lower">
                <img className='logo' src="/logo.webp" alt="" />
                <nav className="header__navbar inter-400">
                    <Link to="/">Home</Link>
                    <Link to="news">News</Link>
                    <Link to="/podcasts">Podcasts</Link>
                    <Link to="resources">Resources</Link>
                </nav>
                <button className='inter-500'>Contact Us</button>
            </div>
        </div>
    )
}