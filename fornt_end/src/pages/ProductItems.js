import { Link } from "react-router-dom";

const ProductItems =(props)=>{
    const { product } =props;
    return (
        <div className="col-4">
            <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div className="card" style={{width: '20rem'}}>
                    <img src="images/herbal-products.png" className="card-img-top" alt="..."></img>
                    <div className="card-body bg-dark">
                        <h5 className="card-title">{product.category}</h5>
                        <hr></hr>
                        <p className="card-text lead">{product.decription}</p>
                        <Link to={`/products/${product._id}`} className="btn btn-primary">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductItems;