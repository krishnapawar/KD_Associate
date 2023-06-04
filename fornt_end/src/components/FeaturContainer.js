import {Link} from'react-router-dom';
import Footer from "./Footer";
const FeaturContainer =()=>{
    return(
      <section className="fearture-footer">
        <div className="b-example-divider"></div>

        <div className="container px-1 py-1" id="icon-grid">
          <h4 className="pb-2 border-bottom">
            <i><strong className="App-logo">K.D. Associate</strong></i>
            </h4>

          <div className="row">
            <div className="col-md-6">
              <div className="row-cols-1">
                  <div className="col d-flex align-items-start">

                  <div>
                    <h5 className="fw-bold mb-0">Address</h5>
                    <p>
                      09 Indrapuri Indore M.P.
                    </p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <div>
                    <h5 className="fw-bold mb-0">Email Address</h5>
                    <p>
                      Purchase@kdassociate.com
                    </p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">  
                  <div>
                    <h5 className="fw-bold mb-0">Contact No.</h5>
                    <p>
                      +91 9993078777
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="row-cols-1">
                <div className="col d-flex align-items-end">
                  <div>
                    <Link to="/about-us" className="nav-link">
                    <h5 className="fw-bold mb-0">About Us</h5>
                    </Link>
                    <p></p>
                  </div>
                </div>
                <div className="col d-flex align-items-end">
                  <div>
                  <Link to="/contact-us" className="nav-link">
                  <h5 className="fw-bold mb-0">
                      Contact Us
                  </h5>
                  </Link>
                  <p></p>
                  </div>
                </div>
                <div className="col d-flex align-items-end">
                  <div>
                  <Link to="/" className="nav-link">
                    <h5 className="fw-bold mb-0">Home</h5>
                  </Link>
                    <p>
                    </p>
                  </div>
                </div>
                <div className="col d-flex align-items-end">
                  <div>
                  <Link to="/" className="nav-link">
                    <h5 className="fw-bold mb-0">Our Products</h5>
                  </Link>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <Footer />
        </div>
      </section>
    );
}
export default FeaturContainer;