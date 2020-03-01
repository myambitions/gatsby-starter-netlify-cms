import React from "react";
import { graphql } from "gatsby";
import History from "../components/Settings/history";
import Layout from "../components/Layout";
import Fieldset from "../components/Settings/fieldset";
const SettingsPage = ({}) => {
  const handleChange = e => {
    console.log("cjhasdasdasd");
  };
  return (
    <Layout className="w80">
      <Fieldset
        title="Уведомления"
        rule="Получать уведомления о новостях"
        onChange={handleChange}
      />
      <Fieldset
        title="Подписка на рассылку"
        rule="Подписаться на рассылку"
        onChange={handleChange}
      />
      <History />
      <button>Get check</button>
    </Layout>
  );
};

export default SettingsPage;
