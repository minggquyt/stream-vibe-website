import ViewMoreButton from '../../components/ViewMoreButton/ViewMoreButton'
import './Homepage.css'

export default function HomePage() {
    return (
        <>
            <div className="herosection">
                <div className="herosection__leftcontent">
                    <div className="herosection__leftcontent--text">
                        <p className='inter-400' >Your Journey to Tomorrow Begins Here</p>
                        <h1 className='inter-500' >Explore the Frontiers of Artificial Intelligence</h1>
                        <p className='inter-400'>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines
                            think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
                    </div>
                    <div className="herosection__leftcontent--buttons">
                        <div className="herosection__leftcontent--button_1">
                            <h1 className='inter-600'>300<span>+</span></h1>
                            <p className='inter-300' >Resources available</p>
                        </div>
                        <div className="herosection__leftcontent--button_2">
                            <h1 className='inter-600'>12k<span>+</span></h1>
                            <p className='inter-300'>Total Downloads</p>
                        </div>
                        <div className="herosection__leftcontent--button_3">
                            <h1 className='inter-600'>10k<span>+</span></h1>
                            <p className='inter-300'>Active Users</p>
                        </div>
                    </div>
                </div>
                <div className="herosection__rightcontent">
                    <img src="/body/herosection/herosectionbanner.webp" alt="" />
                    <div className="herosection__rightcontent--content">
                        <div className="herosection__rightcontent--users">
                            <img src="/body/herosection/user-04.webp" width="60px" height="60px" alt="" />
                            <img src="/body/herosection/user-03.webp" width="60px" height="60px" alt="" />
                            <img src="/body/herosection/user-02.webp" width="60px" height="60px" alt="" />
                            <img src="/body/herosection/user-01.webp" width="60px" height="60px" alt="" />
                        </div>
                        <p className='inter-500'>Explore 1000+ resources</p>
                        <p className='inter-400'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                        <button>Explore Resources <img src="/header/headerarrow.webp" width="15px" height="15px" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="option">
                <div className="option-box option-box-1">
                    <img src="/body/option/icon1.webp" width="50px" height="50px" alt="" />
                    <div className="option-box-body">
                        <div className="option-box-body-leftcontent">
                            <h4 className='inter-500' >Latest News Updates</h4>
                            <p className='inter-400'>Stay Current</p>
                        </div>
                        <div className="option-box-body-rightcontent">
                            <img src="/body/option/blackarrow.webp" width="16px" height="16px" alt="" />
                        </div>
                    </div>
                    <p className='inter-400' >Over 1,000 articles published monthly</p>
                </div>
                <div className="option-box option-box-2">
                    <img src="/body/option/icon2.webp" width="50px" height="50px" alt="" />
                    <div className="option-box-body">
                        <div className="option-box-body-leftcontent">
                            <h4 className='inter-500' >Latest News Updates</h4>
                            <p className='inter-400'>Stay Current</p>
                        </div>
                        <div className="option-box-body-rightcontent">
                            <img src="/body/option/blackarrow.webp" width="16px" height="16px" alt="" />
                        </div>
                    </div>
                    <p className='inter-400' >Over 1,000 articles published monthly</p>
                </div>
                <div className="option-box option-box-3">
                    <img src="/body/option/icon3.webp" width="50px" height="50px" alt="" />
                    <div className="option-box-body">
                        <div className="option-box-body-leftcontent">
                            <h4 className='inter-500' >Latest News Updates</h4>
                            <p className='inter-400'>Stay Current</p>
                        </div>
                        <div className="option-box-body-rightcontent">
                            <img src="/body/option/blackarrow.webp" width="16px" height="16px" alt="" />
                        </div>
                    </div>
                    <p className='inter-400' >Over 1,000 articles published monthly</p>
                </div>
            </div>
            <div className="title">
                <h3 className='inter-400' >Unlock the Power of</h3>
                <h1 className='inter-500'>FutureTech Features</h1>
            </div>
            <div className="blog_section1">
                <div className="blog_section1__leftcontent">
                    <img src="/body/blog-section1/icon.webp" width="80px" height="80px" alt="" />
                    <h1 className='inter-500'>Future Technology Blog</h1>
                    <p className='inter-400' >Stay informed with our blog section dedicated to future technology.</p>
                </div>
                <div className="blog_section1__rightcontent">
                    <div className="blog_section1__rightcontent--item">
                        <h1 className='inter-400'>Quantity</h1>
                        <p className='inter-500'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    </div>
                    <div className="blog_section1__rightcontent--item">
                        <h1 className='inter-400'>Quantity</h1>
                        <p className='inter-500'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    </div>
                    <div className="blog_section1__rightcontent--item">
                        <h1 className='inter-400'>Quantity</h1>
                        <p className='inter-500'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    </div>
                    <div className="blog_section1__rightcontent--item">
                        <h1 className='inter-400'>Quantity</h1>
                        <p className='inter-500'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    </div>
                </div>
            </div>
            <div className="blog_section2">
                <div className="blog_section2__leftcontent">
                    <img src="/body/blog_section2/icon.webp" width="90px" height="80px" alt="" />
                    <h1 className='inter-500' >Research Insights Blogs</h1>
                    <p className='inter-400' >Dive deep into future technology concepts with our research section.</p>
                </div>
                <div className="blog_section2__rightcontent">
                    <div className="blog_section2__rightcontent--item">
                        <h1 className='inter-400'>Depth</h1>
                        <p className='inter-500'>500+ research articles for in-depth understanding.</p>
                    </div>
                    <div className="blog_section2__rightcontent--item">
                        <h1 className='inter-400'>Depth</h1>
                        <p className='inter-500'>500+ research articles for in-depth understanding.</p>
                    </div>
                    <div className="blog_section2__rightcontent--item">
                        <h1 className='inter-400'>Depth</h1>
                        <p className='inter-500'>500+ research articles for in-depth understanding.</p>
                    </div>
                    <div className="blog_section2__rightcontent--item">
                        <h1 className='inter-400'>Depth</h1>
                        <p className='inter-500'>500+ research articles for in-depth understanding.</p>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="banner_leftcontent">
                    <p className='inter-400' >A Knowledge Treasure Trove</p>
                    <h1 className='inter-500' >Explore FutureTech's In-Depth Blog Posts</h1>
                </div>
                <ViewMoreButton title="View More Blog" />
            </div>
            <div className="blogs">
                <div className="blogs_header inter-400">
                    <button>All</button>
                    <button>Quantum Computing</button>
                    <button>AI Ethics</button>
                    <button>Space Exploration</button>
                    <button>Biotechnology</button>
                    <button>Renewable Energy</button>
                </div>
                <div className="blogs_body">
                    <div className="blogs_body_userblog blogs_body_userblog_1">
                        <div className="blogs_body_userblog--userinfo">
                            <img src="/body/herosection/user-01.webp" width="80px" height="80px" alt="" />
                            <div className='blogs_body_userblog--userinfo--description'>
                                <h5 className='inter-500' >Minh Quý</h5>
                                <p className='inter-400' >Quantum Computing</p>
                            </div>
                        </div>
                        <div className="blogs_body_userblog--content">
                            <div className="blogs_body_userblog--content_left">
                                <p className="blogs_body_userblog--content_left-date inter-400">
                                    Ngày 23 tháng 11, 2025
                                </p>
                                <div>
                                    <h3 className='blogs_body_userblog--content_left-title inter-500'>The Quantum Leap in Computing</h3>
                                    <p className='blogs_body_userblog--content_left-desc inter-400' >Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
                                </div>
                                <div className="blogs_body_userblog--content_left--social">
                                    <div className="blogs_body_userblog--content_left--social_like inter-400">
                                        <span className="material-symbols-outlined">
                                            favorite
                                        </span>
                                        24.5k
                                    </div>
                                    <div className="blogs_body_userblog--content_left--social_comment inter-400">
                                        <span className="material-symbols-outlined">
                                            chat_bubble
                                        </span>
                                        24.5k
                                    </div>
                                    <div className="blogs_body_userblog--content_left--social_send inter-400">
                                        <span className="material-symbols-outlined">
                                            send
                                        </span>
                                        24.5k
                                    </div>
                                </div>
                            </div>
                            <ViewMoreButton title="View Blog" />
                        </div>
                    </div>
                    <div className="blogs_body_userblog blogs_body_userblog_2">
                        <div className="blogs_body_userblog--userinfo">
                            <img src="/body/herosection/user-01.webp" width="80px" height="80px" alt="" />
                            <div className='blogs_body_userblog--userinfo--description'>
                                <h5 className='inter-500' >Hữu Khang</h5>
                                <p className='inter-400' >AI Ethics</p>
                            </div>
                        </div>
                        <div className="blogs_body_userblog--content">
                            <div className="blogs_body_userblog--content_left">
                                <p className="blogs_body_userblog--content_left-date inter-400">
                                    Ngày 23 tháng 11, 2025
                                </p>
                                <div>
                                    <h3 className='blogs_body_userblog--content_left-title inter-500'>The Quantum Leap in Computing</h3>
                                    <p className='blogs_body_userblog--content_left-desc inter-400' >Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
                                </div>
                                <div className="blogs_body_userblog--content_left--social">
                                    <div className="blogs_body_userblog--content_left--social_like inter-400">
                                        <span className="material-symbols-outlined">
                                            favorite
                                        </span>
                                        24.5k
                                    </div>
                                    <div className="blogs_body_userblog--content_left--social_comment inter-400">
                                        <span className="material-symbols-outlined">
                                            chat_bubble
                                        </span>
                                        24.5k
                                    </div>
                                    <div className="blogs_body_userblog--content_left--social_send inter-400">
                                        <span className="material-symbols-outlined">
                                            send
                                        </span>
                                        24.5k
                                    </div>
                                </div>
                            </div>
                            <ViewMoreButton title="View Blog" />
                        </div>
                    </div>
                    <div className="blogs_body_userblog blogs_body_userblog_3">
                        <div className="blogs_body_userblog--userinfo">
                            <img src="/body/herosection/user-01.webp" width="80px" height="80px" alt="" />
                            <div className='blogs_body_userblog--userinfo--description'>
                                <h5 className='inter-500' >Minh Quý</h5>
                                <p className='inter-400' >Space Exploration</p>
                            </div>
                        </div>
                        <div className="blogs_body_userblog--content">
                            <div className="blogs_body_userblog--content_left">
                                <p className="blogs_body_userblog--content_left-date inter-400">
                                    Ngày 23 tháng 11, 2025
                                </p>
                                <div>
                                    <h3 className='blogs_body_userblog--content_left-title inter-500'>The Quantum Leap in Computing</h3>
                                    <p className='blogs_body_userblog--content_left-desc inter-400' >Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
                                </div>
                                <div className="blogs_body_userblog--content_left--social">
                                    <div className="blogs_body_userblog--content_left--social_like inter-400">
                                        <span className="material-symbols-outlined">
                                            favorite
                                        </span>
                                        24.5k
                                    </div>
                                    <div className="blogs_body_userblog--content_left--social_comment inter-400">
                                        <span className="material-symbols-outlined">
                                            chat_bubble
                                        </span>
                                        24.5k
                                    </div>
                                    <div className="blogs_body_userblog--content_left--social_send inter-400">
                                        <span className="material-symbols-outlined">
                                            send
                                        </span>
                                        24.5k
                                    </div>
                                </div>
                            </div>
                            <ViewMoreButton title="View Blog" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}