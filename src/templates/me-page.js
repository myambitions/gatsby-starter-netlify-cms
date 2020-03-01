import React from "react";
import { graphql } from "gatsby";
import Edit from "../components/Me";
import Payments from "../components/Me/payments";
import Layout from "../components/Layout";
import img from "../img/logo.svg";
const MePage = ({ data }) => {
  const {
    frontmatter: { name }
  } = data.markdownRemark;
  const submit = e => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <Layout className="w80">
      <Edit name={name} img={img} />
      <Payments submit={submit} />
    </Layout>
  );
};

export default MePage;

export const pageQuery = graphql`
  query MePage {
    markdownRemark(frontmatter: { templateKey: { eq: "me-page" } }) {
      frontmatter {
        name
      }
    }
  }
`;
