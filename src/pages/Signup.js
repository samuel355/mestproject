import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

function Signup() {
    return (
        <>
            <div className="site-wrap">
                <Navbar />
                
                <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(images/hero_bg_1.jpg)'}} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">

                            <div className="col-md-10">
                                
                                <div className="row justify-content-center mb-4">
                                    <div className="col-md-10 text-center">
                                        <h1 data-aos="fade-up" class="mb-5"> Create an Account</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="site-section bg-light">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-7 mb-5"  data-aos="fade">

                            

                            <form action="#" class="p-5 bg-white" style={{marginTop: '-150px'}}>
                            

                                <div class="row form-group">
                                    <div class="col-md-6 mb-3 mb-md-0">
                                    <label class="text-black" for="fname">First Name</label>
                                    <input type="text" id="fname" class="form-control" />
                                    </div>
                                    <div class="col-md-6">
                                    <label class="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" class="form-control" />
                                    </div>
                                </div>

                                <div class="row form-group">
                                    
                                    <div class="col-md-12">
                                    <label class="text-black" for="email">Email</label> 
                                    <input type="email" id="email" class="form-control" />
                                    </div>
                                </div>

                                <div class="row form-group">
                                    
                                    <div class="col-md-12">
                                    <label class="text-black" for="password">Password</label> 
                                    <input type="password" id="password" class="form-control" />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    
                                    <div class="col-md-12">
                                    <label class="text-black" for="password">Re-enter Password</label> 
                                    <input type="password" id="repassword" class="form-control" />
                                    </div>
                                </div>

                                


                                <div class="row form-group">
                                    <div class="col-md-12">
                                    <input type="submit" value="Create an Account" class="btn btn-pill btn-primary btn-md text-white" />
                                    </div>
                                </div>

                                 <p>
                                    <Link className="btn btn-primary btn-sm" to ="/Login"> Alrady have an Account ?</Link>
                                </p>
                            </form>
                        </div>
                        <div class="col-md-5"  data-aos="fade" data-aos-delay="100">
                            
                            
                            <div class="p-4 mb-3 bg-white">
                            <h3 class="h5 text-black mb-3">More Info</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
                            <p><a href=" #" class="btn btn-primary px-4 py-2 text-white btn-pill btn-sm">Learn More</a></p>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Signup
