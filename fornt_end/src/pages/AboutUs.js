const AboutUs =()=>{
    return (
        <>
            <section className="mt-4 mb-4" data-interval="false" id="header003-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="content-wrapper align-left">
                                <h3 className="pb-3 mb-1 fw-bold display-5">About us</h3>
                                <div className="carousel slide slides pt-2" role="listbox" data-pause="true" data-keyboard="false" data-ride="carousel" data-interval="5000" id="header003-2-carousel">
                                    <div className="carousel-inner">                                        
                                        <div className="carousel-item active">
                                                <div className="align-left">
                                                    <h2 className="pb-3 mb-1">Over 10 years experience in industry</h2>
                                                    <p className="display-7 pb-3 mb-1">Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Aliquam tortor purus, suscipit a accumsan quis, blandit a dolor.
                                                    Morbi quis purus at ipsum tristique varius sit amet id odio.</p>
                                                    <ul className="list mb-3 ">
                                                        <li>Lorem ipsum</li>
                                                        <li>Morbi quis purus at ipsum</li>
                                                        <li>Aliquam tortor purus</li>
                                                        <li>Blandit a dolor</li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-1 pt-3 display-6">Lorem ipsum dolor sit <a href="#" className="text-black">amet</a></p>
                            </div>
                        </div>
                        <div className="col-lg-6 m-auto img-col">
                            <img src="images/about.jpg" alt="Mobirise" className="img-fluid"></img>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </section>
            
            <section className="features004 cid-skD26GYlGY mt-2 mb-2" id="features004-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 align-left feature">
                            <img src="images/test_tube_plant.jpg" alt="" className="rounded img-fluid"></img>
                        </div>
                        <div className="col-md-6 col-12 align-center content d-flex justify-content-center align-items-center flex-column">
                            <p className="display-7">
                                <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nobis eius accusamus possimus facere assumenda quae
                                odit qui reprehenderit expedita.</em></p>
                            <h3 className="pt-1 pb-2 display-6">Karan Veer</h3>
                            <h6 className="text-grey display-7">CEO, FRONTIERS India</h6>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </section>
        </>
    );
}

export default AboutUs;