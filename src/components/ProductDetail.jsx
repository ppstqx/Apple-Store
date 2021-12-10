import React from 'react'
import { useParams } from 'react-router'


const ProductDetail = () => {
    


 

    return (
        <>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <img src={product.img} alt={product.title} />
                  </div>
                  <div className="col-md-6">
                      <h1>{product.title}</h1>
                      <hr />
                      <h2>{product.price}</h2>
                      <p>{product.desc}</p>
                      <button className="btn btn-outline-primary">Add to cart</button>
                  </div>
              </div>
          </div>
        </>
    )
}

export default ProductDetail
