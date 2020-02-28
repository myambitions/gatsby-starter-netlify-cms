import React, { useState, useContext } from "react";
import { graphql } from "gatsby";
import Banner from "../components/Main/Banner";
import Features from "../components/Main/Features";
import CourseBlock from "../components/Main/CourseSection";
import Feedbacks from "../components/Main/Feedbacks";
import Quote from "../components/Main/Quote";
import Team from "../components/Main/Team";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { course as crs, feedbacks, team } from "../../static/mocks/main";
import Map from "../components/Main/Map";
import { ApiContext } from "../components/api";
const MainPage = ({ data }) => {
  const {
    frontmatter: { image, heading, subtitle, features, course, quote }
  } = data.markdownRemark;
  const { user, loginUser } = useContext(ApiContext);
  const [iSModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(m => !m);
  };
  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const f = { name: form["name"].value, password: form["password"].value };
    Promise.resolve()
      .then(_ => loginUser(f))
      .then(handleModal)
      .catch(err => console.log(err));
  };
  return (
    <Layout>
      <Banner
        title={heading}
        subtitle={subtitle}
        img={image}
        open={handleModal}
      />
      <Features items={features} />
      <CourseBlock img={image} {...course} images={crs} />
      <Feedbacks feedbacks={feedbacks} />
      <Quote quote={quote} />
      <Team team={team} />
      <Map />
      {iSModalOpen && (
        <Modal handleClose={handleModal} title="Вход">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              name="name"
              placeholder="Введите имя пользователя"
              required
            />
            <label htmlFor="name">Пароль</label>
            <input
              type="password"
              name="password"
              placeholder="Введите пароль"
              required
            />
            <button type="submit">Войти</button>
            {/* <button onClick={handleModal}>Cancel</button> */}
            <p>Зарегистрироваться</p>
          </form>
        </Modal>
      )}
    </Layout>
  );
};

export default MainPage;

export const pageQuery = graphql`
  query MainPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "test-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subtitle
        description
        features {
          text
        }
        course {
          name
          creationDate
          category
          courseAbout
          link
          social {
            socialTitle
            socialLink
          }
          preview
        }
        quote
      }
    }
  }
`;
