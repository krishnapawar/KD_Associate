const ContactModel =()=>{
    window.onload = () => {
        $('#onload').modal('show');
    }
    return (
        <div className="modal fade" id="onload" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Contact Us For More Information! 🍪</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" enctype="multipart/form-data">
                <div className="modal-body">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name" name="name"></input>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Contact Number" name="contact_no"></input>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    );
}
export default ContactModel;