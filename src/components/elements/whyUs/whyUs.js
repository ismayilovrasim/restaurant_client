import React from 'react'
import Image from '../../../assets/img/Image'

const WhyUs = () => {
  return (
    <div className='bg-dark p-5 mt-5 white'>
      <div classNameName="section features text-center bg-dark" aria-label="features">
        <div className="container">
          <div className='text-center'>
          <p className="section-subtitle label-2">Why Choose Us</p>
          <h2 className="headline-1 section-title">Our Strength</h2>
          </div>

          <ul className="row grid-list p-0 d-flex white-color list-none justify-content-center">

            <li className="feature-item col-lg-3 col-md-6 col-sm-12">
              <div className="feature-card">

                <div className="card-icon">
                  <img src={Image.Feature1} width="100" height="80" loading="lazy" alt="icon"/>
                </div>

                <h3 className="title-2 card-title text-center">Hygienic Food</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>


            <li className="feature-item col-lg-3 col-md-6 col-sm-12">
              <div className="feature-card">

                <div className="card-icon">
                  <img src={Image.Feature3} width="100" height="80" loading="lazy" alt="icon"/>
                </div>

                <h3 className="title-2 card-title text-center">Skilled Chefs</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li className="feature-item col-lg-3 col-md-6 col-sm-12">
              <div className="feature-card">

                <div className="card-icon">
                  <img src={Image.Feature4} width="100" max-height="80" loading="lazy" alt="icon"/>
                </div>

                <h3 className="title-2 card-title text-center">Event & Party</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

          </ul>

          <img src="./assets/images/shape-7.png" width="208" height="178" loading="lazy" alt="shape"
            className="shape shape-1"/>

          <img src="./assets/images/shape-8.png" width="120" height="115" loading="lazy" alt="shape"
            className="shape shape-2"/>

        </div>
      </div>
    </div>
  )
}

export default WhyUs