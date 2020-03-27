import React from "react";
import styled from "styled-components";

import { Layout, withLocale } from "src/components";
import { useTranslation } from "src/utilities/translations";

const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
`;

const IndexPage = () => {
  const { translate } = useTranslation();

  return (
    <Layout title={translate("root.helloWorld")}>
      <TitleContainer>
        <Title>{translate("root.helloWorld")}</Title>
      </TitleContainer>
    </Layout>
  );
};

export default withLocale(IndexPage);
