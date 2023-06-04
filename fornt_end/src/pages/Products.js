import { useState, useEffect } from "react";
import ProductItems from "./ProductItems";
  
const Products =()=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('/api/product', {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
        })
        .then(response =>response.json())
        .then(products =>setProducts(products.data))
    },[]);
   
    return(
        <main className="container-fluid">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">Punny headline</h1>
                    <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div className="shadow-sm d-none d-md-block"></div>
                <div className="shadow-sm d-none d-md-block"></div>
            </div>

            <div className="row d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                {
                    products.map((product)=><ProductItems key={product._id} product={product}/>)
                }

            </div>
        </main>
    );
}
export default Products;