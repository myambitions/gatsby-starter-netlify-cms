import React from "react";
import Divider from "../../Divider";
import { Link } from "gatsby";
import "./styles.css";

const CourseBlock = ({
  img,
  name,
  creationDate,
  category,
  courseAbout,
  link,
  preview,
  images,
  social
}) => {
  return (
    <div
      className="course-block banner"
      style={{
        backgroundImage:
          !!img && !!img.childImageSharp ? img.childImageSharp.fluid.src : img
      }}
    >
      <div className="video-preview">
        <div className="video-src"></div>
      </div>
      <div className="course-preview">
        <div className="course-heading">
          <h2>{name}</h2>
          <div className="course-info">
            <p>{creationDate}</p>
            <Divider type="primary" />
            <p>{category}</p>
          </div>
        </div>
        <div className="course-text">
          <div className="course-about">
            <p>{courseAbout}</p>
            <Link to={link}>read more ⟶</Link>
          </div>
          <div className="course-social">
            {social.map(({ socialTitle, socialLink }) => (
              <>
                <a href={socialLink}>{socialTitle}</a>
                <Divider type="primary" />
              </>
            ))}
          </div>
        </div>
        <div className="course-images">
          {images.map(({ image }) => (
            <img src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseBlock;
