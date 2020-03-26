import React from "react";
import styled from "styled-components";
import { Layout, withLocale } from "src/components";
import { useTranslation } from "src/utilities/translations";

let spectacle = {};

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
`;

const IndexPage = () => {
  const [showSlideshow, useShowSlideshow] = React.useState(false);
  const { translate } = useTranslation();

  React.useEffect(() => {
    spectacle = require("spectacle");
    useShowSlideshow(true);
  }, []);

  const { Deck, Slide, Heading } = spectacle;

  return (
    <Layout title={translate("slides.title")}>
      {showSlideshow && (
        <Deck>
          <Slide>
            <Heading>
              <Title>{translate("root.helloWorld")}</Title>
            </Heading>
          </Slide>
          <Slide>
            <Heading>
              <Title>{translate("slides.title")}</Title>
            </Heading>
          </Slide>
        </Deck>
      )}
    </Layout>
  );
};

export default withLocale(IndexPage);
