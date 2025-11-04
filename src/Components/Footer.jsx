import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-primary text-light py-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <h5 className="mb-2">R-Builder</h5>
            <p className="small mb-0">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <a href="#about" className="text-light mx-2 text-decoration-none">
              Stay in touch
            </a>
            <a href="#projects" className="text-light mx-2 text-decoration-none">
              Projects
            </a>
            <a href="#contact" className="text-light mx-2 text-decoration-none">
              Contact us
            </a>
          </div>

          {/* <div className="col-md-4 text-center text-md-end">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-light mx-2"
            >
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
