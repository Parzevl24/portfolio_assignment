import React, { useState, useEffect } from "react";
import data from "./data.json";
import arrowImage from "./assets/arrow.png";

function TestimonialSection() {
    const [testimonials, setTestimonials] = useState(data.user.testimonials);
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(intervalId);
    }, [testimonials.length]);
  
    return (
      <div>
        <section id="testimonials" style={{ marginTop: "400px", position: "relative" }}>
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Testimonials</h1>
  
          <div className="testimonials-slider"  style={{ marginTop: "100px"}}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial ${index === activeIndex ? "active" : ""}`}
              >
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-review">{testimonial.review}</p>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default TestimonialSection;
  