import React from "react";
import Typography from "@material-ui/core/Typography";

import { Layout, withLocale } from "src/components";

const IndexPage: React.FC = () => {
  return (
    <Layout titleKey="notAPipe">
      <Typography variant="h2" component="h1">
        Hello World
      </Typography>
    </Layout>
  );
};

export default withLocale(IndexPage);
