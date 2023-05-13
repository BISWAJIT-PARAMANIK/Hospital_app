import React from "react";
import "./gallery.css";
import gallery1 from "../../images/gallery/gallery1.jpg";
import gallery2 from "../../images/gallery/gallery2.jpg";
import gallery3 from "../../images/gallery/gallery3.jpg";
import gallery4 from "../../images/gallery/gallery4.jpg";
import gallery5 from "../../images/gallery/gallery5.avif";
import gallery6 from "../../images/gallery/gallery6.jpg";
const Gallery = () => {
  return (
    <section id="gallery" className="gallery_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-5">
            <h3>Our Gallery</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-5 mb-4">
            <img src={gallery1} alt="gallery1" className="w-100 h-100" />
          </div>
          <div className=" offset-md-0 col-md-6 offset-sm-1 col-sm-5 mb-4">
            <img src={gallery2} alt="gallery2" className="w-100 h-100" />
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <img src={gallery3} alt="gallery3" className="w-100 h-100" />
          </div>
          <div className="offset-md-0 col-md-4 offset-sm-1 col-sm-5 mb-4">
            <img src={gallery4} alt="gallery4" className="w-100 h-100" />
          </div>
          <div className="col-md-4 col-sm-5 mb-4">
            <img src={gallery5} alt="gallery5" className="w-100 h-100" />
          </div>
          <div className="offset-md-0 col-md-4 offset-sm-1 col-sm-5 mb-4">
            <img src={gallery6} alt="gallery6" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
