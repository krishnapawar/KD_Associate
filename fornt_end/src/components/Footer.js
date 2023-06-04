const Footer = ()=>{
    return(
        <footer className="footer mt-auto py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="text-muted">
                &copy; 2023–2024 Com, Inc. &middot;
                <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
              </span>
            </div>
            <div className="col-md-6 ">
              <span className="text-right faleft">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-youtube"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-twitter"></a>
              </span>
            </div>
          </div>
          
        </div>
      </footer>
    );
}
export default Footer;