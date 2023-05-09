import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Footer/footer.scss";
import { faFacebookF, faGoogle, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Image from "../../../assets/img/Image";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 col mb-3">
            <div className="footer-logo">
                  <span className="logo">
                    <img src={Image.Logo} alt="/"/>
                     Grandmom's Thandir</span>
            
            </div>
            <div className="footer-icons mb-3">
              <a href="#">
              <FontAwesomeIcon
              className="social-icon"
                icon={faFacebookF}
              />
              </a>
              <a href="#">
              <FontAwesomeIcon
              className="social-icon"
                icon={faInstagram}
              />
              </a>
              <a href="#">
              <FontAwesomeIcon
              className="social-icon"
                icon={faYoutube}
              />
              </a>
              <a href="#">
              <FontAwesomeIcon
              className="social-icon"
                icon={faGoogle}
              />
              </a>
            </div>
          </div>
          <div className=" offset-lg-1 col-lg-2 col-md-4 col-sm-6 col-12 col mb-3">
            <h5>Menu</h5>
            <ul className="footer-list">
              <li>
                <a href>Home</a>
              </li>
              <li>
                <a href>About</a>
              </li>
              <li>
                <a href>Contact Us</a>
              </li>
              <li>
                <a href>Costumer Reviews</a>
              </li>
            </ul>
          </div>
          <div className="  col-lg-3 col-md-4 col-sm-6 col-12  col mb-3">
            <h5>Opening Hours</h5>
            <ul className="footer-list">
              <li>
                <a href>Monday--Thursday</a>
              </li>
              <li>
                <a href>10:00 AM--11:00 PM</a>
              </li>
              <li>
                <a href>Friday--Sunday</a>
              </li>
              <li>
                <a href>12:00 AM--03:00 AM</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-6 col-12 col mb-3">
            <h5>Location</h5>
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8793500846073!2d-73.99865118522601!3d40.74268024367611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bb665a5b95%3A0x37d23ed9e6c9479e!2s198%20W%2021st%20St%20%23721%2C%20New%20York%2C%20NY%2010011%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2s!4v1664191408427!5m2!1str!2s"
                title="map"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom col-12 text-center">
        <p>Copyright @2023 by <i>Grandmom's Thandir</i></p>
      </div>
    </footer>
  );
};

export default Footer;