import Image from "../../../assets/img/Image"

const About = () => {
  return (
    <div className="section text-center about" id="about">
      <div className="container">
      
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about-contet">
              <h3 className="label-2 section-subtitle mt-5">Our Story</h3>
              <h2 className="headeline-1 section-title">Every Fla vor Tells a Story</h2>

              <p className="ection-text">
                The restaurant was founded by our family in 1950. 
                To serve happiness to our customers through delicious, 
                quality meals and extraordinary restaurant experience while working toward the greater good for our employees, 
                community and environment.
              </p>

              <div className="contact-label">Book Through Call</div>

              <a href="tel:+80 (400) 123 4567" className="body-1 contact-number hover-underline">+80 (400) 123 4567</a>

              <a href="/" className="btn btn-about">
                <span className="text text-1">Read More</span>
                <span className="text text-2" aria-hidden='true'>Read More</span>
              </a>

            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-5 mt-70">
            <figure className="about-banner">
              <img src={Image.Hall} style={{width:'570', height:'570'}} alt="about banner" className="w-100" 
              data-parallax-item data-parallax-speed='1'/>

              <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed='1.75'>
                <img src={Image.Man} className="man" loading='lazy' alt=""/>
              </div>

              <div className="abs-img abs-img-2 has-before">
                <img src={Image.Badge} style={{width:'133', height:'134'}} loading='lazy' alt="" />
              </div>

              <img src={Image.Shape} style={{width:'197', height:'194'}} loading='lazy' alt="" className='shape'/>
               
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About