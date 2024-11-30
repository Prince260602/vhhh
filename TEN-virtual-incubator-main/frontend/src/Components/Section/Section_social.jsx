import React from 'react'
import image from '../../assets/images/section_social.jpeg';
import './Section_social.css'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>Ten Social Network aims to connect users through shared interests and experiences, fostering a sense of community</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://ten-social-network-fr8f-git-main-techtens-projects.vercel.app/'>Explore More</a></button>
            </div>
        </div>

        <div className='Section-page-img'>
            <img src={image} alt="" />
        </div>

      </div>
    </>
  )
}

export default Section