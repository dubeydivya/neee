import React, { useEffect } from 'react';
import './css/Career.css'
import { Link } from 'react-router-dom';
import './css/Career.css'
import { motion } from 'framer-motion'
import teamImg from '../Assets/team1.jpg'
import Zoom from 'react-reveal/Zoom';


function Career() {
    useEffect(() => {
        document.title = "Career Services"
    }, [])

    return <>
        <motion.div className='container-fluid job' initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <div className='row com-row text-center pb-5 job-card  '>
                <div className='col-md-12 d-flex justify-content-center'>
                    <Zoom>
                        <div className='card-home'>
                            <div className=' text-white title pt-4 pb-4 '>Ignite your career journey with us?</div>
                            <h1 className='text-white title-job display-1 pt-4 pb-4'>Careers</h1>
                            <p className='text-white titl-pc p-3'> We are a Software Development based Startup and We are ready for new Talent to Join our Company</p>
                            <Link to='/jobs'><button className='btn  button m-3 m2-6 p-3  ' >View Jobs</button></Link> <br />
                            <Link to='/internship'><button className='btn  button m-3 m2-6 p-3  ' >View Internships</button></Link>
                        </div>
                    </Zoom>
                </div>
            </div>

            <div className='row com-row text-white ps-2 pe-2 pt-4 pb-4'>
                <Zoom>
                    <div className='col-md-12 text-light mt-4 mb-4'>
                        <p className='titl-pc'>We Heyram Infrastructure are committed to cultivating a culture of exceptional people who create outstanding & measurable results for our clients.
                            We provides a comprehensive suite of digital services, from cutting-edge web development and marketing automation to data analysis and cybersecurity solutions.
                        </p>
                    </div>
                </Zoom>
            </div>

            <div className='row com-row text-white ps-2 pe-2 pt-4 pb-4' >
                <div className='col-md-12 d-flex justify-content-center '>
                    <div className='contents-career w-100'>
                        <Zoom>
                            <div className='h1 pb-2 mt-2'>
                                Our Community
                            </div>
                            <p className='w-100 pt-4 pb-4 titl-pc'>We refuse to do things the way they’ve always been done. Motivated by a collective commitment to a sustainable future, we work to build an inclusive environment in which everyone—regardless of gender, race, religion, age or background—can succeed.</p>
                            <img className='w-100' src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1000,w_2232,c_fit,f_auto,q_auto:best/careers-life-at-tesla" alt="community-imag" />
                        </Zoom>
                    </div>
                </div>
            </div>

            <div className='row com-row text-white ps-2 pe-2 pt-4 pb-4'>
                <div className='col-md-12 text-end d-flex justify-content-center '>
                    <div className='contents-career w-100'>
                        <div className='h1 pb-3'>
                            Environment
                        </div>
                        <p className=' pt-4 pb-4 titl-pc'>It doesn’t matter where you come from, where you went to  school or what industry you’re in—if you’ve done exceptional work, <br />  join us to rethink the future of sustainable energy and manufacturing.</p>
                        <div className='env-image '>
                        <img className='w-100' src="https://www.e4education.co.uk/_site/data/files/images/slideshow/7/3B9EC5E081EE611F83577BE2FEE26C45.jpg" alt="community-imag" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row com-row text-white ps-2 pe-2 pt-4 pb-4'>
                <div className='col-md-12 d-flex justify-content-center '>
                    <div className='contents-career w-100'>
                        <div className='h1 pb-3'>
                            Join Our Team
                        </div>
                        <p className='w-100 pt-4 pb-4 titl-pc'><h5>Are you passionate about making a difference and shaping the future of technology?</h5> Join our team of talented individuals who are dedicated to driving innovation and creating positive impact. Explore exciting career opportunities with Heyram Infrastructure today!</p>
                        <img className='w-100' src={teamImg} alt="community-imag" />
                    </div>
                </div>
            </div>

        </motion.div>

        {/* <div className='col-md-12 text-light m-4'>
            <h3>Mentorship and Internship Programs</h3>
            <p className='titl-pc'> <h5>Are you a student or recent graduate looking to kickstart your career in software development or digital services?</h5> Our mentorship and internship programs offer valuable hands-on experience, mentorship from industry professionals, and opportunities to work on exciting projects that make a difference.</p>
        </div> */}


    </>

}

export default Career;