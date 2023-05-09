import Carousel from '../Card/Slider/SinpleSlider';
import Image from "../../../assets/img/Image"

const MainCarousel = ({ data }) => {



    return (
        <Carousel
        style={{
            display:'block'
        }}>

            <div className="head-slide white-bg-overlay">
                <div className="head-slide-text-container"
                    style={{
                        display:"block",
                        backgroundImage: `url(${Image.Slider1})`,
                        width: '100%',
                        height: '80vh',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        color: '#e4c590',
                    }}
                >

                    <div className="banner-content d-inline-block">

                        <h5 className="banner-subtitle head-slide-text-container-title font-weight-normal text-default ls-50 slide-animate show-content font-16 font-lg-20">
                            <p>WELCOME TO OUR RESTAURANT</p>
                            <h1>Where every flavor tells a story</h1>
                            <p>Come with family & feel the joy of mouthwatering food</p>
                        </h5>

                    </div>

                </div>

            </div>
            
            
            <div className="head-slide white-bg-overlay">
                <div className="head-slide-text-container"
                    style={{
                        display:"block",
                        backgroundImage: `url(${Image.Sushi})`,
                        width: '100%',
                        height: '80vh',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        color: '#e4c590'


                    }}
                >

                    <div className="banner-content d-inline-block">

                        <h5 className="banner-subtitle head-slide-text-container-title font-weight-normal text-default ls-50 slide-animate show-content font-16 font-lg-20">
                            <p>WELCOME TO OUR RESTAURANT</p>
                            <h1>Flavors Inspired by the Seasons</h1>
                            <p>Come with family & feel the joy of mouthwatering food</p>
                        </h5>

                    </div>

                </div>

            </div> 

            <div className="head-slide white-bg-overlay">
                <div className="head-slide-text-container"
                    style={{
                        display:"block",
                        backgroundImage: `url(${Image.Sushi})`,
                        width: '100%',
                        height: '80vh',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        color: '#e4c590'


                    }}
                >

                    <div className="banner-content d-inline-block">

                        <h5 className="banner-subtitle head-slide-text-container-title font-weight-normal text-default ls-50 slide-animate show-content font-16 font-lg-20">
                            <p>WELCOME TO OUR RESTAURANT</p>
                            <h1>With love from our family</h1>
                            <p>Come with family & feel the joy of mouthwatering food</p>
                        </h5>
                    </div>

                </div>

            </div> 
            
            

            
            <div className="head-slide white-bg-overlay">
                <div className="head-slide-text-container"
                    style={{
                        display:"block",
                        backgroundImage: `url(${Image.Slider2})`,
                        width: '100%',
                        height: '80vh',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        color: '#e4c590'
                    }}
                >

                    <div className="banner-content d-inline-block">

                        <h5 className="banner-subtitle head-slide-text-container-title font-weight-normal text-default ls-50 slide-animate show-content font-16 font-lg-20">
                            <p>WELCOME TO OUR RESTAURANT</p>
                            <h1>For the love of delicious food</h1>
                            <p>Come with family & feel the joy of mouthwatering food</p>
                        </h5>
                    </div>

                </div>

            </div>




        </Carousel>
    )
}

export default MainCarousel;