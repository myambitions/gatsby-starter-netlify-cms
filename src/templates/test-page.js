import React from "react";
import Banner from "../components/Main/Banner";
import Features from "../components/Main/Features";
import CourseBlock from "../components/Main/CourseSection";
import Feedbacks from "../components/Main/Feedbacks";
import Quote from "../components/Main/Quote";
import Team from "../components/Main/Team";
const MainPage = ({ data }) => {
  const {
    frontmatter: {
      image,
      heading,
      subtitle,
      features,
      course,
      feedbacks,
      quote,
      team
    }
  } = data.markdownRemark;
  return (
    <main>
      <Banner title={heading} subtitle={subtitle} img={image} />
      <Features items={features} />
      <CourseBlock img={image} {...course} />
      <Feedbacks feedbacks={feedbacks} />
      <Quote quote={quote} />
      <Team team={team} />
    </main>
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
          images {
            image
          }
        }
        feedbacks {
          text
          name
          image
        }
        quote
        team {
          name
          position
          image
        }
      }
    }
  }
`;
