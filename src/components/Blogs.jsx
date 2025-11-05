import React from "react";
import Titlecomp from "./Titlecomp";

function Blogs() {
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
                <div className="blog-card">
                    <div className="img-container">
                        <img src="src/components/Images/blogcard-img.svg" alt="" />
                    </div>

                    <div className="img-text">
                        <img src="src/components/Images/calender-icon.svg" alt="" />
                        <p>August 17, 2025</p>
                    </div>
                    

                    <div className="blog-card-title">
                      <h6 className="card-title">Safe and Secure: The Importance of Choosing the Right Storage</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                    </div>


                    <div className="read-more">
                      <a className="read-more-btn" href="">Read more →</a>
                    </div>
                </div>




                 <div className="blog-card">
                    <div className="img-container">
                        <img src="src/components/Images/blogcard-img.svg" alt="" />
                    </div>

                    <div className="img-text">
                        <img src="src/components/Images/calender-icon.svg" alt="" />
                        <p>August 17, 2025</p>
                    </div>
                    

                    <div className="blog-card-title">
                      <h6 className="card-title">Safe and Secure: The Importance of Choosing the Right Storage</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                    </div>


                    <div className="read-more">
                      <a className="read-more-btn" href="">Read more →</a>
                    </div>
                </div>









                 <div className="blog-card">
                    <div className="img-container">
                        <img src="src/components/Images/blogcard-img.svg" alt="" />
                    </div>

                    <div className="img-text">
                        <img src="src/components/Images/calender-icon.svg" alt="" />
                        <p>August 17, 2025</p>
                    </div>
                    

                    <div className="blog-card-title">
                      <h6 className="card-title">Safe and Secure: The Importance of Choosing the Right Storage</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                    </div>


                    <div className="read-more">
                      <a className="read-more-btn" href="">Read more →</a>
                    </div>
                </div>




              
                
               
            </div>


        </div>
      </section>
    </>
  );
}

export default Blogs;
