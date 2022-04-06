import React from "react";

const Team = () => {
  return (
    <div>
      <h1 className="text-center py-4">Our Team</h1>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div class="col" data-aos="flip-left" data-aos-duration="3000">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1530192742375-0cbabc8953a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                class="card-img-top p-4"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                        <button className="btn btn-dark text-light">View Details</button>
              </div>
            </div>
          </div>
          <div class="col" data-aos="flip-up" data-aos-duration="3000">
            <div class="card h-100">
            <img
                src="https://images.unsplash.com/photo-1530192742375-0cbabc8953a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                class="card-img-top p-4"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
              <button className="btn btn-dark text-light">View Details</button>
              </div>
            </div>
          </div>
          <div class="col" data-aos="flip-up" data-aos-duration="3000">
            <div class="card h-100">
            <img
                src="https://images.unsplash.com/photo-1530192742375-0cbabc8953a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                class="card-img-top p-4"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
              <button className="btn btn-dark text-light">View Details</button>
              </div>
            </div>
          </div>
          <div class="col" data-aos="flip-left"
     
     data-aos-duration="3000">
            <div class="card h-100">
            <img
                src="https://images.unsplash.com/photo-1530192742375-0cbabc8953a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                class="card-img-top p-4"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
              <button className="btn btn-dark text-light">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
