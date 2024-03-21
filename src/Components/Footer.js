import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';

function Footer() {
    return <>
        <div className='container-fluid' bottom>
            <div className='row text-center text-dark' style={{backgroundColor:"#B1A296"}}>
                <Zoom>
                    <div className='col-md-4 p-3'>
                            ©2024 All rights reserved
                    </div>
                </Zoom>
                <Zoom><div className='col-md-4 p-3'>
                    <Link style={{ "textDecoration": "none", "color": "black" }} >
                        PRIVACY POLICY
                    </Link>
                </div>
                </Zoom>
                <Zoom>
                    <div className='col-md-4 p-3'>
                        Designed and Developed By <Link to='/home' style={{ "textDecoration": "none", "color": "black" }}><b>HEYRAM INFRASTRUCTURE</b></Link>
                    </div>
                </Zoom>
            </div>
        </div>
    </>
}

export default Footer