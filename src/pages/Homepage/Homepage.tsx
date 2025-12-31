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
        </>
    )
}