import React from "react";
import Layout from "../components/Layout";
import Preview from "../components/Preview";
import img from "../../static/img/main.jpg";
import Banner from "../components/Profile/banner";
const ProfilePage = () => {
  return (
    <Layout className="w80">
      <Banner img={img} />
      <Preview video={img} />
    </Layout>
  );
};

export default ProfilePage;
