import React from 'react';
import logo from '../Header/output-onlinepngtools.png'
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted" >
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style ={{background:"#bd4133" ,color:"white"}}>
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Follow Us on Social Media for regular updates</span>
        </div>
        {/* <div className="me-5 d-none d-lg-block">
          <span>Follow Us for updates</span>
        </div> */}
        <div>
          <a href="https://www.facebook.com/Publicprolepoints/" className="me-4 text-reset" >
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="publicprolepoints@gmail.com" className="me-4 text-reset">
            <i className="fa fa-google"></i>
          </a>
          <a href="https://www.instagram.com/publicprolepoints/" className="me-4 text-reset" >
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCtXM9PCed66PYlqsmTb43Cg" className="me-4 text-reset">
            <i className="fa fa-youtube"></i>
          </a>

        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
              <img src={logo} alt="Logo" height="45" className='ml-1' /> 
              </h6>
              <p>
              Empowering Voices, Uniting Hearts: Public Prole Points - Together Towards a Brighter India!.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Topics</h6>
              <p>
                <a href="#" className="text-reset">
                  Topic1
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Topic 2
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Topic 3
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Topic 4
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 " style={{}}>Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Sports Top articles
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Politics top rated 
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cinema Most Popular 
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Most loved Articles
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fa fa-home me-3"></i> Ankit Kumar, Begusarai, Bihar
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                publicprolepoints@gmail.com
              </p>
              <p>
                <i className="fa fa-phone me-3"></i> +91 7665500714
              </p>
              <p>
                <i className="fa fa-facebook me-3"></i> Ankit Kumar
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style ={{background:"#bd4133" ,color:"white"}}>
        © 2023 Copyright
       
    </div>
    {/* Copyright */}
  </footer>
);
};

export default Footer;
