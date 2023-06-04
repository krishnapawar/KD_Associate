const ContactUs =()=>{
    return (
        <section>
                <div className="container px-1 py-1">
                    <div className="row">
                        <div className="mb-2">
                            <h3 className="  align-left pb-1 mb-0 fw-bold  display-5">Connect with us</h3>
                            <p className=" align-left pb-4 mb-0  display-7"></p>
                        </div>
                        <div className="col-4 mx-auto mbr-form" data-form-type="formoid">
                            <div className="mb-2">
                                <img src="images/contact_us1.png" className="img-fluid"></img>
                            </div>
                        </div>
                        <div className="col-8 mx-auto mbr-form" data-form-type="formoid">
                            <form action="#" method="POST" className="from-group" data-form-title="Form Name">
                                <div className="dragArea form-row">
                                    <div className="col-lg-12 form-group col-12" data-for="first-name">
                                        <input type="text" name="first-name" placeholder="First Name" data-form-field="first-name" className="form-control text-grey display-5" value="" id="first-name-form001-5"></input>
                                    </div>
                                    <div className="col-lg-12 form-group col-12" data-for="company">
                                        <input type="text" name="company" placeholder="Name Service" data-form-field="company" className="form-control display-5" value="" id="company-form001-5"></input>
                                    </div>
                                    
                                    <div data-for="phone" className="col-lg-12 form-group col-12">
                                        <input type="tel" name="phone" placeholder="Phone" data-form-field="phone" className="form-control display-5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value="" id="phone-form001-5"></input>
                                    </div>
                                    <div data-for="message" className="col-lg-12 form-group col-12">
                                        <textarea name="message" placeholder="Message" data-form-field="message" className="form-control display-5" value="" id="message-form001-5"></textarea>
                                    </div>
                                    <div className="col-auto input-group-btn"><button type="submit" className="btn btn-info display-4">Submit</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default ContactUs;