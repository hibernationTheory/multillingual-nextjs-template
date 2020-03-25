import React from "react";
import { Layout, withLocale } from "src/components";

const IndexPage: React.FC = () => {
  return <Layout titleKey="notAPipe">Hello World</Layout>;
};

export default withLocale(IndexPage);
