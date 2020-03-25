import React from "react";
import { Layout } from "../../components/Layout";
import withLocale from "../../hocs/withLocale";

const IndexPage: React.FC = () => {
  return <Layout titleKey="notAPipe">Hello World</Layout>;
};

export default withLocale(IndexPage);
