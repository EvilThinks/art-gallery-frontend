import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Carousel = ({ items = [] }) => {
  console.log(items);
  return (
    <BootstrapCarousel bsPrefix="">
      {!items.length && (
        <div style={{ height: "900px", backgroundColor: "#999" }}></div>
      )}
      {items.map(({ imgUrl, date, title, url }, index) => {
        return (
          <BootstrapCarousel.Item key={index}>
            <img className="d-block w-100" src={imgUrl}></img>
            <BootstrapCarousel.Caption bsPrefix="">
              <strong className="d-block fontSerif mainHeadingTitle font-weight-normal mb-4">
                Currently Onview -<time dateTime={date}>{date}</time>
              </strong>
              <h1 className="text-white ibbHeading mb-8">{title}</h1>
              <Link
                to={url}
                className="btn btn-dark btnDarkInverse align-top btnMdMinWidth"
              >
                View Details
              </Link>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        );
      })}
    </BootstrapCarousel>
  );
};

export default Carousel;
