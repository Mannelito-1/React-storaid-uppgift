import React, { useEffect, useState } from "react";

function Testimonial() {
  const [testimonialItems, setTestimonialItems] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
    );
    const data = await res.json();
    setTestimonialItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="testimonials">
        <div className="container-space">
          <div className="testimonial-headding">
            <h4>Testimonials</h4>
            <h3>See What Our Client Have to Say</h3>
            <p className="title-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida.
            </p>
          </div>

          <div className="testimonialsdiv">
            {testimonialItems.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-stars">
                  <p className="stars">{"★".repeat(item.rating)}</p>
                </div>
                <div className="card-text">
                  <p>{item.comment}</p>
                </div>

                <div className="profile">
                  <div className="img-container">
                    <img  className="proflie-pic"src={item.avatarUrl} alt="" />
                  </div>

                  <div className="proflie-text">
                    <h6>{item.name}</h6>
                    <p> {item.companyName}</p>
                  </div>

                  <div className="icon">
                    <img
                      src="src/components/Images/testimonials-icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Testimonial;
