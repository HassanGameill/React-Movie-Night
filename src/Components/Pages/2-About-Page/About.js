import './about.css'

import logo from '../../Images/llogo.png'



function About() {
  return (
    <div className='container-about'>
                <h1 className='title'>About Us</h1>
                <div className='about-content'>
                    <div className='image'>
                        <img src={logo}  className='img-a'/>
                    </div>
                    <div className='content'>
                      <p>
                        Hello Shopping For the Commerce Thats All Project In future 
                        Hello Shopping For the Commerce Thats All Project In future 
                        Hello Shopping For the Commerce Thats All Project In future 
                        Hello Shopping For the Commerce Thats All Project In future 
                        Hello Shopping For the Commerce Thats All Project In future 
                        Hello Shopping For the Commerce Thats All Project In future 

                      </p>
                      <a href='#' className='readMore'>Red More</a>

                    </div>

                </div>
                
                
            </div>
            
  )
}

export default About
