import React from "react";

const Goal = () => {
  return (
    <div>
      <div className="container">
                <h1>Our Goal</h1>
        <div class="row g-4 my-5">
          <div class="col-md-6 col-lg-6   "
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-delay="5000"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          // data-aos-anchor-placement="top-center"  
          
          >
            <div class="p-3   text-light border rounded-3 border bg-dark">
              <h5 className="text-light">What is semantic tag?</h5>
              <p>
                Semantic tag is meaningfull element thos that perfectlly
                describe their meaning in human and machine readable.Such as
                section,article,
                footer,aside,header,main,summary,details,nav,figcaption.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-6 text-light"
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-delay="5000"
          data-aos-duration="2000"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-once="false"
          
          >
            <div class="p-3   align-items-center justify-content-between border rounded-3 border bg-dark">
              <h5 className="">What is purpose of context api?</h5>
              <p>
                Without having to pass props down manually at every
                label.Context provides a way to pass data from parent to child
                component.
              </p>
              <li>Create context.</li>
              <li>Wrap parent context provide. </li>
              <li>Provide a value of the context as props.</li>
              <li>Wrap child with context consumer.</li>
              <li>Consumer follows the render props pattern.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
