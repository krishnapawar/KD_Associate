import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct =()=>{
  const  [products, setProducts]=useState([]);
    const params = useParams();
    useEffect(()=>{
        fetch(`/api/product/${params._id}`,{
            method:'GET',
            headers: {
                accept: 'application/json',
              },
        })
        .then(res=>res.json())
        .then(product=>setProducts(product.data))
    },[])
    console.log(products)
    return(
    <main className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5  text-white overflow-hidden">
                    <div className="card" >
                        <img src="https://i.imgur.com/TAzli1U.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body bg-dark">
                            <h5 className="card-title">{products.category}</h5>
                            <hr></hr>
                            <h1 className="display-6 fw-normal">{products.name}</h1>
                            <p className="card-text leadl">{products.decription}</p>
                            <a className="btn btn-outline-secondary" >Rs :- {products.price}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
);
}
export default SingleProduct;