import React from "react";
import styled from "styled-components";

import { Layout } from "src/components";

const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
`;

const IndexPage = () => {
  return (
    <Layout title={'hello world'}>
      <TitleContainer>
        <Title>{' hello world '}</Title>
      </TitleContainer>
    </Layout>
  );
};

export default IndexPage
