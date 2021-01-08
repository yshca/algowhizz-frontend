import React from 'react'
import './HomePage.css'
import CreateMyAccount from './CreateMyAccount'

function HomePage() {
    return (
        <div className='homepage'>
          <div className='box-1'>
              <div className='heading'>
              <h1>
                  Learn The Expert Way
              </h1>
              </div>
              <div className='content'>
              <p>
              AlgoProdigy is the best platform to enhance your technical skills required to ace coding interviews
              </p>
              <div className='rectangle'>
              <CreateMyAccount />
              </div>
              </div>
              
          </div>
          <div className='box-2'>
              pic
          </div>
          <div class="custom-shape-divider-bottom-1610033275">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
        </div>
        </div>
    )
}

export default HomePage
