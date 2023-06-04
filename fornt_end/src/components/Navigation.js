import {Link} from'react-router-dom';
import CarouselSlider from '../components/CarouselSlider';
const Navigation = ()=>{
    return(
         <div className="App">
            <header className="App-header">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" >
                            <i><strong>K.D. Associate</strong></i>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" aria-current="page"> Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#"role="button" data-bs-toggle="dropdown" >Our Products</a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/products">Link</Link></li>
                                        <li><Link className="dropdown-item" to="/products">Another link</Link></li>
                                        <li><Link className="dropdown-item" to="/products">A third link</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us" className="nav-link" aria-current="page" >
                                        Aboute Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact-us" className="nav-link" aria-current="page" >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            <div className=" d-flex">
                                    <a href="#" className="fa fa-facebook"></a>
                                    <a href="#" className="fa fa-youtube"></a>
                                    <a href="#" className="fa fa-instagram"></a>
                                    <a href="#" className="fa fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <CarouselSlider/>
        </div>
    );
}
export default Navigation;