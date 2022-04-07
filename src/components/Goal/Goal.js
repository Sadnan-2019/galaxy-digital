import React from "react";

const Goal = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Our Goal</h1>
        <div class="row g-4 my-5">
          <div
            class="col-md-6 col-lg-6   "
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          >
            <div class="p-3   text-light    bg-dark">
              <h5 className="text-light">Our Goal?</h5>
              <p  
              data-aos="fade-up-right"
              
              
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                architecto. Voluptate nesciunt adipisci, sapiente accusantium
                optio eaque perferendis est, dolores voluptas molestias quos!
                Commodi possimus itaque quis vero quidem officia velit officiis
                iste? Quia quidem fugit velit aliquid totam! Sed ex quos cum
                nemo velit magnam odio perferendis optio eligendi. Assumenda
                provident magni accusamus quia, cumque laudantium quas sed ipsum
                consectetur ea eveniet odio eos fugit hic harum rem
                exercitationem? Eius, voluptatum aliquid. Non, mollitia fuga
                labore eligendi id necessitatibus magnam delectus autem optio
                tenetur ratione assumenda nisi. Totam accusantium recusandae
                aut, blanditiis quaerat veniam consectetur ipsum commodi quos
                nesciunt?
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-6 text-light"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div class="p-3    bg-dark">
              <img
                src="https://images.unsplash.com/photo-1629568853783-d94e53ee53d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                alt="" className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
