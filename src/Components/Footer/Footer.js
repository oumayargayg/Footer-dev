import React from "react";
import './Footer.css';



const Footer = () => {
    return(
        <>
            <div className="map-area" >
            <iframe 
            title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25554.883076023183!2d10.060150492434333!3d36.809883216561545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd326a6997b651%3A0xae1949b938bf5487!2sManouba!5e0!3m2!1sfr!2stn!4v1678369347161!5m2!1sfr!2stn"
            width={600} 
            height={450} 
            style={{border: 0}} 
            allowFullScreen loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" />
            </div>



        {/* Footer */}
        <footer className="text-center footer text-lg-start bg-light text-muted">
            {/* Section: Social media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
                <a href className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
                </a>
                <a href className="me-4 text-reset">
                <i className="fab fa-twitter" />
                </a>
                <a href className="me-4 text-reset">
                <i className="fab fa-google" />
                </a>
                <a href className="me-4 text-reset">
                <i className="fab fa-instagram" />
                </a>
                <a href className="me-4 text-reset">
                <i className="fab fa-linkedin" />
                </a>
                <a href className="me-4 text-reset">
                <i className="fab fa-github" />
                </a>
            </div>
            {/* Right */}
            </section>
            {/* Section: Social media */}
            {/* Section: Links  */}
            <section className>
            <div className="container text-center text-md-start mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content */}
                    <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />Company name
                    </h6>
                    <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">
                    Products
                    </h6>
                    <p>
                    <a href="#!" className="text-reset">Angular</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">React</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Vue</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Laravel</a>
                    </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                    </h6>
                    <p>
                    <a href="#!" className="text-reset">Pricing</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Settings</a>
                    </p>
                    <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                <a href="#!" className="text-reset">Help</a>
                </p>
            </div>
              {/* Grid column */}
              {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                <p>
                <i className="fas fa-envelope me-3" />
                info@example.com
                </p>
                <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
            </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
        </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* Copyright */}
        </footer>
      {/* Footer */}
    
            </>
        )
    }
    export default Footer






