import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <header className="site-navbar" role="banner">

                <div className="container">
                    <div className="row align-items-center">
                    
                        <div className="col-11 col-xl-4">
                            <h1 className="mb-0 site-logo"><Link to ="/"  className="text-white mb-0">Pre Mest<span className="text-primary">.</span> </Link></h1>
                        </div>
                        <div className="col-12 col-md-8 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">

                            <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                <li><Link to="/"><span>Home</span></Link></li>
                                <li><Link to="/Services"><span>Services</span></Link></li>
                                <li><Link to="/About" ><span>About</span></Link></li>
                                <li><Link to="/Blog"><span>Blog</span></Link></li>
                                <li><Link to="/contact"><span>Contact</span></Link></li>
                                <li><a href="Login"><span>Account</span></a></li>
                            </ul>
                            </nav>
                        </div>


                        <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: 'relative', top: '3px' }} ><a href=" " className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

                    </div>

                    
                </div>
                
            </header>
           
        </>
    )
}

export default Navbar
