import React, { useEffect, useState } from "react";
import Titlecomp from "./Titlecomp";
import { Link } from "react-router-dom";

function Blogs() {
  const [onHover, setOnHover] = useState(null);

  const [blogItems, setBlogItems] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://win25-jsf-assignment.azurewebsites.net/api/blogs"
    );
    const data = await res.json();
    setBlogItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="blogs">
        <div className="container-space">
          <div className="title">
            <Titlecomp
              pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
              h4Title="Latest Blog and News"
              h3Title="Check Out Our Latest Blog and News Update"
            />
          </div>

          <div className="blogs-div">
            {blogItems.map((item) => (
              <Link to="/404" className="linkStyle" key={item.id}>
                <div
                  className={`blog-card ${onHover === item.id ? "active" : ""}`}
                  onMouseEnter={() => setOnHover(item.id)}
                  onMouseLeave={() => setOnHover(null)}
                  key={item.id}
                >
                  <div className="img-container">
                    <img src={item.imageUrl} />
                  </div>

                  <div className="img-text">
                    <img
                      className="calander-dark"
                      src="src/components/Images/calender-icon-dark.svg"
                      alt=""
                    />
                    <img
                      className="calender-light"
                      src="src/components/Images/calender-icon.svg"
                      alt=""
                    />
                    <p>{new Date(item.created).toLocaleString("en-US", { month: "long", day: "2-digit", year:"numeric"})}</p>
                  </div>
                  {/* took help from chatgpt to convert item.created to display month day and year instead of just numbers. */}

                  <div className="blog-card-title">
                    <h6 className="card-title">{item.title}</h6>
                    <p className="description">{item.description}</p>
                  </div>

                  <div className="read-more">
                    <p className="read-more-btn">Read more →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
