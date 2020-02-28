import React, { useState, useEffect, useCallback, useContext } from "react";
import Layout from "../components/Layout";
import courses from "../../static/mocks/courses.json";
import MyCoursesHeading from "../components/MyCourses/Heading";
import Preview from "../components/Preview";
import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";
import TabItems from "../components/TabContent/itemsList";
import QAItems from "../components/TabContent/qaList";
import CommentsList from "../components/TabContent/commentsList";
const MyCourses = () => {
  const [tabStep, setTabStep] = useState(1);
  const course = courses[0];
  const handleTabStep = useCallback(
    id => {
      setTabStep(id);
    },
    [tabStep]
  );
  return (
    <Layout className="w80">
      <MyCoursesHeading {...course} />
      <Preview video={course.preview} />
      <Tabs step={tabStep} handleTabStep={handleTabStep}>
        {tabStep === 1 || tabStep === 2 ? (
          <TabItems {...course} step={tabStep} />
        ) : null}
        {tabStep === 3 ? <QAItems {...course} /> : null}
        {tabStep === 4 ? <CommentsList {...course} /> : null}
      </Tabs>
    </Layout>
  );
};

export default MyCourses;
