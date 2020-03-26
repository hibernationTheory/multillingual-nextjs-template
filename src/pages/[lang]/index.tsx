import React from "react";
import styled from "styled-components";

import { Layout, withLocale } from "src/components";
import { useTranslation } from "src/utilities/translations";

const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage = () => {
  const { translate } = useTranslation();

  return (
    <Layout titleKey="helloWorld">
      <TitleContainer>
        <Title>{translate("helloWorld")}</Title>
      </TitleContainer>
    </Layout>
  );
};

export default withLocale(IndexPage);
