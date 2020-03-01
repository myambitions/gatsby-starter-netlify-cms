import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Preview from "../components/Preview";
import img from "../../static/img/main.jpg";
import Banner from "../components/Profile/banner";
import Description from "../components/Profile/description";
import Knowledge from "../components/Profile/knowledge";
import Features from "../components/Profile/features";
import Feedbacks from "../components/Main/Feedbacks";
import { feedbacks } from "../../static/mocks/main";
const ProfilePage = ({ data }) => {
  const {
    frontmatter: {
      author,
      description,
      whatYouWillKnow,
      whatYouWillLearn,
      ftrs
    }
  } = data.markdownRemark;
  return (
    <Layout className="w80">
      <h1>Начни свой курс</h1>
      <Banner img={img} />
      <Preview video={img} />
      <Description author={author} description={description} />
      <Knowledge learn={whatYouWillLearn} know={whatYouWillKnow} />
      <Features list={ftrs} />
      <Feedbacks feedbacks={feedbacks} />
    </Layout>
  );
};

export default ProfilePage;

export const pageQuery = graphql`
  query ProfilePage {
    markdownRemark(frontmatter: { templateKey: { eq: "profile-page" } }) {
      frontmatter {
        title
        author
        description
        whatYouWillKnow
        whatYouWillLearn
        ftrs
      }
    }
  }
`;
