import React from "react";
import styled from "styled-components";

import { Layout, withLocale } from "src/components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage: React.FC = () => {
  return (
    <Layout titleKey="notAPipe">
      <Title>Hello World</Title>
    </Layout>
  );
};

export default withLocale(IndexPage);
