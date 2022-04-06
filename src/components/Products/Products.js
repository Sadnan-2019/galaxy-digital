import React from "react";

const Products = () => {
  return (
    <div>
      <div className="container">
        <div className="row py-4 row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div
              className="card h-100"
              data-aos="fade-right"
          //     data-aos-delay="5000"
              data-aos-duration="1000"
            >
              <img
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top p-4"
                alt="..."
              />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">Product Description</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer bg-success">
                <button className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col " data-aos="fade-down" data-aos-duration="1000">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top p-4"
                alt="..."
              />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer bg-success">
                <button className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-left" data-aos-duration="1000">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="card-img-top p-4"
                alt="..."
              />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer bg-success">
                <button className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
